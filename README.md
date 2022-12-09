# Book Search Engine

## Description

The goal of this project was to refactor an app that was using a RESTful API into an app that uses GraphQL API built with Apollo server.

[Deployed Site]()

## Technology Use

- Javascript
- MongoDB
- REACT
- Express.js
- Node.js
- GraphQL API

## Code Snippet

```JavaScript
// this determines which page to load when clicking links
function App() {
  const [currentPage, setCurrentPage] = useState('about');
  function renderPage() {
    if (currentPage === 'about') return <Me></Me>;
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
}
```

## Author Links

[LinkedIn](https://www.linkedin.com/in/alexis-zaragoza-5baa51242/)
[GitHub](https://github.com/turtle2001)
