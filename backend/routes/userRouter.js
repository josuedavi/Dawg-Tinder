const router = require('express').Router()
userCtrl = require('../controllers/userCtrl')

router.post('/register', function(req, res) {
  userCtrl.register
})
module.exports = router
