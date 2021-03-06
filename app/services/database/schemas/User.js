var mongoose = require('mongoose');
var bcrypt = require('bcrypt')

var User = new mongoose.Schema({
  uid         : { type: Number , required: true, default: 0, index: true, unique: true},
  email       : { type: String , required: true, lowercase: true, index: true, unique: true},
  nickname    : { type: String , required: false,lowercase: true, index: true},
  firstname   : { type: String , required: false},
  lastname    : { type: String , required: false},
  auth        :
  {
    local       :
    {
          email        : String,
          password     : String
    },
    facebook    :
    {
          id           : String,
          token        : String,
          email        : String,
          name         : String
    },
    twitter     :
    {
          id           : String,
          token        : String,
          displayName  : String,
          username     : String
    },
    google      :
    {
          id           : String,
          token        : String,
          email        : String,
          name         : String
    }
  }
});

User.methods.generateHash = function(password)
{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.verifyPassword = function(password)
{
    return bcrypt.compareSync(password, this.auth.local.password);
};

module.exports = mongoose.model('User', User);