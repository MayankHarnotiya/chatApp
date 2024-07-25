const express = require('express')
const registerUSer = require('../controller/registerUSer')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetail = require('../controller/userDetail')
const logout = require('../controller/logout')
const updateUserDetail = require('../controller/updateUserDetail')
const searchUser = require('../controller/searchUser')

const router = express.Router()


//create user api
router.post('/register',registerUSer)
//check user email
router.post('/email',checkEmail)
//check user password
router.post('/password',checkPassword)
//login user details
router.get('/user-details',userDetail)
//logout user
router.get('/logout',logout)
//update user details
router.post('/update-user',updateUserDetail)
//search user
router.post("/search-user",searchUser)


module.exports = router