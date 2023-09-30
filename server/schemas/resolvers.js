const { Profile } = require("../models");

const resolvers = {
  Query: {
    profile: async (parent, { profileId }) => {
      return Profile.findOne({
        _id: profileId,
      });
    },
  },

  Mutation: {
    addProfile: async (
      parent,
      { userName, password, email, firstName, lastName, memberType }
    ) => {
      const profile = new Profile({
        userName: userName,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        memberType: memberType,
      });
      await profile.save();
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
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: profileId },
        { ...(memberType && { memberType }) },
        { runValidators: true, new: true }
      );
      return updatedProfile;
    },
  },
};

module.exports = resolvers;
