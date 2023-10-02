const { Profile, Reservation } = require("../models");

const resolvers = {
  Query: {
    profile: async (parent, { profileId }) => {
      return Profile.findOne({
        _id: profileId,
      });
    },
    reservations: async () => {
      return Reservation.find();
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
