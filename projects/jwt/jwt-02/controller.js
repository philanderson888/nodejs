exports.refresh = (request,response) {
    const accessToken = request.cookies.jwt;
    if(!accessToken) return response.status(403).send();
    let payload;
    try {
        payload = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
    }
    catch(e) {  return response.status(401).send(); }
    const newToken = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{
        algorithm: "HS256",
        expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });
    response.cookie("jwt",newToken,{secure:true,httpOnly:true})
    response.send();
}