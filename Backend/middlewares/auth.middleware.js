const blacklistTokenModel = require('../models/blacklistToken.model');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/captain.model')

module.exports.authUser = async (req, res, next) => {
    try {
        // Safely extract token from cookies or headers
        const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized Access' });
        }

        const isBlacklisted = await blacklistTokenModel.findOne({ token: token});

        if (isBlacklisted) {
            return res.status(401).json({ message: 'Unauthorized Access' });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch the user based on the token's decoded ID
        req.user = await userModel.findById(decoded._id);

        // If the user is not found, return an error
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized Access: User Not Found' });
        }

        // Proceed to the next middleware
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized Access: Invalid or Expired Token', error: error.message });
    }
}; 

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Access' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token});
    
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized Access' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next()
    }catch (err) {
        res.status(401).json({ message: 'Unauthorized Access'});
     }
};
