const sentJwtToClient = (user, res) =>{
    // Generate JWT
    const token = user.generateJswFromUser();

    const {JWT_COOKIE_EXPIRE, NODE_ENV} = process.env;

    return res
        .status(200)
        .cookie("access_token", token, {
            httpOnly: false,
            expires: new Date(Date.now() + parseInt(JWT_COOKIE_EXPIRE) + 1000),
            secure: NODE_ENV !== "development"
        })
        .json({
            success: true,
            access_token: token,
            data: {
                name: user.name,
                email: user.email
            }
        });
}

module.exports = sentJwtToClient;