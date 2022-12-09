const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  //query resovler for get routes
  Query: {
    users: async () => {
      return await User.find({}).populate('savedBooks');
    },
    user: async () => {
      return await User.findById(args.id).populate('savedBooks');
    },
  },

  //mutation for post/delete
  Mutation: {
    createUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      //assigning token
      const token = signToken(user);

      return token, profile;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        console.error('No profile with this email!');
      }
      //checking passord
      const validatePW = await user.isCorrectPassword(password);

      if (!validatePW) {
        console.error('Incorrect PW, please try again');
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { user, description, bookID, title }) => {
      const user = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToset: { savedBooks: { description, bookID, title } } },
        { new: true, runValidators: true }
      );
    },
    removeBook: async (parent, { user, bookID }) => {
      const user = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: bookID } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
