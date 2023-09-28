const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  id: {},
  username: {},
  password: {},
  email: {},
  firstName: {},
  lastName: {},
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
