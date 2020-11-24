const jwt = require('json-web-token');
exports.verify = (request,response,next) => {
    const accessToken = request.cookies.jwt;
    if(!accessToken) return response.status(403).send();
    let payload;
    try {
        payload = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
        next();
    }
    catch(e) { return response.status(401).send(); }
}