const express = require('express')

const {
    users_signup_user,
    users_login_user
} = require('../contorller/user')
const router = express.Router()

// sign up
router.post('/signup', users_signup_user)

// login
router.post('/login', users_login_user)

module.exports = router