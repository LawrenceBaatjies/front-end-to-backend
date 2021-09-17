const express = require('express')
const router = express.Router()
const usersRoute = require('../controllers/userController')

router.get('/', usersRoute.usersController)

module.exports = router
