const { Profile } = require("../models");

const resolvers = {
  Query: {
    profile: async (parent, { userName, password }) => {
      return Profile.findOne({
        userName: userName,
        password: profileData.password,
      });
    },
  },

  Mutation: {
    addProfile: async (
      parent,
      { userName, password, email, firstName, lastName, memberType }
    ) => {
      const profile = new Profile(
        userName,
        password,
        email,
        firstName,
        lastName,
        memberType
      );
      await profile.create();
      return profile;
    },

    login: async (parent, { userName, password }) => {
      const profile = await Profile.findOne({ userName });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      // const token = signToken(profile);
      // return { token, profile };
      return profile;
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
