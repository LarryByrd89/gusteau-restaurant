const { Profile } = require("../models");

const resolvers = {
  Query: {
    profile: async (parent, { profileData }) => {
      return Profile.findOne({
        userName: profileData.userName,
        password: profileData.password,
      });
    },
  },

  Mutation: {
    addProfile: async (parent, { profileData }) => {
      return Profile.create({ profileData });
    },

    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },

    updateMemberType: async (parent, { profileId, memberType }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $set: { memberType: memberType } },
        { runValidators: true, new: true }
      );
    },
  },
};

module.exports = resolvers;
