const express = require('express')
const controllers = require('../controllers/index');
const router = express.Router()


//users
router.post('/login', controllers.login)
router.post('/register', controllers.register)
// router.put('/users/:id', controllers.updateUser)
// router.delete('/users/:id', controllers.deleteUser)

//articels
router.get('/articels', controllers.articelsAll)
router.post('/articels', controllers.articelsCreate)
// router.put('/articels', controllers.articelsUpdate)
// router.delete('/articels', controllers.articelsDelete)

module.exports = router;