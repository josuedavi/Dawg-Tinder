const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,  "Please enter your name!"],
    trim: true
  },
  email: {
    type: String,
    required: [true,  "Please enter your email!"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true,  "Please enter your password!"],
    trim: true
  },
  role: {
    type: Number,
    default: 0 //0 = user, 1 = admin
  },
  avatar: {
    type: String,
    default: "https://gravatar.com/avatar/63bdbd9997e1ad42c2fe0c50c9c5b3ce?s=400&d=identicon&r=x"
  }
},  {
  timestamps: true
})

module.exports = mongoose.model("Users", userSchema)
