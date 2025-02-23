// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    //post req nakhvathi response ma success:true, user no data and token aavse and req moklta res posne mam upr navbar ma cookie generate thayeli dekhase
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token,
    });
};

module.exports = sendToken;
