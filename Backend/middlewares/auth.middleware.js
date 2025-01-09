const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    try {
        // Safely extract token from cookies or headers
        const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];

        // Check if the token exists
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized Access: No Token Provided' });
        }

        const isBlacklisted = await userModel.findOne({ token: token});

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
