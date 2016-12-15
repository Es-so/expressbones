var mongoose = require('mongoose');

var User = new mongoose.Schema({
  firstname   : { type: String , required: true},
  lastname    : { type: String , required: true},
  email       : { type: String , required: true, index: true},
  auth        :
  {
    local       :
    {
          email        : String,
          password     : String,
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

module.exports = mongoose.model('User', User);
