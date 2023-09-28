const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  memberType: {
    type: String,
    required: true,
    default: 'standard',
    enum: ['standard', 'silver', 'gold']
  }
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
