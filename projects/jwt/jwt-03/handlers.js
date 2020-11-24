const jwt = require('jsonwebtoken')
const jwtKey = 'my_secret_key'
const jwtExpirySeconds = 60
const users = {
  user1: 'password1',
  user2: 'password2'
}
const signIn = (req, res) => {
  const { username, password } = req.body
  console.log(req)
  console.log ('user', req.body)
  if (!username || !password || users[username] !== password) {
    res.send('not authorised')
    return res.status(401).end()
  }
  const token = jwt.sign({ username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  })
  console.log('token:', token)
  res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
  res.send(token)
  res.end()
}
const welcome = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).end()
  }
  var payload
  try {
    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end()
    }
    return res.status(400).end()
  }
  res.send(`Welcome \n\n${payload.username}!\n\ntoken - ${token}\n\npayload - ${JSON.stringify(payload)}\n\ncookies - ${JSON.stringify(req.cookies)}\n\ntoken cookie - ${req.cookies.token}`)
}
const refresh = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).end()
  }
  var payload
  try {
    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end()
    }
    return res.status(400).end()
  }
  // We ensure that a new token is not issued until enough time has elapsed
  // In this case, a new token will only be issued if the old token is within
  // 30 seconds of expiry. Otherwise, return a bad request status
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end('Bad request.  Cannot refresh token as too soon')
  }
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  })
  res.cookie('token', newToken, { maxAge: jwtExpirySeconds * 1000 })
  res.send(`Token has been refreshed\nuser ${payload.username}\n\ntoken - ${newToken}!`)
  res.end()
}

module.exports = {
    signIn,
    welcome,
    refresh
  }