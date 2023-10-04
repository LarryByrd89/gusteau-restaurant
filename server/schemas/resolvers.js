const { Profile, Reservation } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    profile: async (parent, { profileId }) => {
      return await Profile.findOne({
        _id: profileId,
      });
    },
    reservations: async () => {
      return Reservation.find();
    },
    me: async (parent, args, context) => {
      console.log(context);
      if (context.req.profile._id) {
        return await Profile.findOne({ _id: context.req.profile._id });
      }
      throw new AuthenticationError("You need to be logged in!");
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

      const token = signToken(profile);

      const context = { profile: profile };
      return { token, profile, context };
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

    createReservation: async (
      parent,
      { firstName, lastName, selectedDate, selectedTime, email }
    ) => {
      const reservation = new Reservation({
        firstName,
        lastName,
        selectedDate,
        selectedTime,
        email,
      });
      await reservation.save();
      return reservation;
    },
  },
};

module.exports = resolvers;
