const express = require('express')
const controllers = require('../controllers/index');
const router = express.Router()


//users
router.get('/user', controllers.getUser)
router.get('/user/:id', controllers.getId)
router.post('/login', controllers.login)
router.post('/register', controllers.register)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)

//articels
router.get('/articels', controllers.articelsAll)
// router.get('/articels/:id', controllers.articelsId)
router.post('/articels', controllers.articelsCreate)
router.put('/articels/:id', controllers.articelsUpdate)
router.delete('/articels/:id', controllers.articelsDelete)

module.exports = router;