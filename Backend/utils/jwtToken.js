// Create and send token and save in the cookie
const sendToken = (user, statusCode, res) => {
    // Create Jwt token
    const token = user.getJwtToken();

    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    }; // 24 hours in milliseconds (24 * 60 * 60 * 1000) = 86400000 milliseconds = 1 day in milliseconds = 1 day * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds    // httpOnly: true means that the cookie is not accessible via JavaScript   

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        token,
        user
    }); // send token in cookie
}

module.exports = sendToken;