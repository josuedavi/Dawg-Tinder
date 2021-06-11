const Users = require('../models/userModels')

const userCtrl = {
  register: async (req, res) => {
    try {
      res.json({msg: "Register test"})
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  }
}
