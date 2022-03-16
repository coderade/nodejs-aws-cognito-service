const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  // Here we can check the req.user.scope array contains the scope relevant for the REST API operation being invoked
  const authorizationToken = req.headers.authorization
  const token = authorizationToken.split(' ')[1]
  // res.cookie('cookieName', 'cookieValue', { sameSite: 'lax', secure: true })
  res.setHeader('Set-Cookie', `access_token=${token}; SameSite=None; Secure`)
  res.send('Successfully verified JWT token. Extracted information: ' + JSON.stringify(req.user))
})

module.exports = router
