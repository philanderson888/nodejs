const jwt = require('json-web-token');
const users = {
    phil: {password:"123"},
    bob:  {password:"456"},
}
exports.login = (request,response) => {
    const username = request.body.username
    const password = request.body.password
    if(!username) return response.status(401).send()
    if(!password) return response.status(401).send()
    if(users[username] !== password) response.status(401).send()
    const payload = {username};
    const accessToken = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{
        algorithm:"HS256",
        expiresIn:process.env.ACCESS_TOKEN_LIFE,
    })
    const refreshToken = jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{
        algorithm:"HS256",
        expiresIn:process.env.REFRESH_TOKEN_LIFE,
    })
    users[username].refreshToken = refreshToken;
    response.cookie("jwt",accessToken,{secure:true,httpOnly:true})
    response.send();
}