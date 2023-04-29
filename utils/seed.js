const mongoose = require('mongoose');
const { Thought, User } = require('./models');
const { users, thoughts } = require('./data');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socially', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const seedDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();

    // Create users and add them to the database
    const createdUsers = await User.create(users);

    // Replace the usernames in the thoughts array with their corresponding user IDs
    const thoughtsWithUserIds = thoughts.map((thought) => ({
      ...thought,
      userId: createdUsers.find(user => user.username === thought.username)._id
    }));

    // Create thoughts and add them to the database
    const createdThoughts = await Thought.create(thoughtsWithUserIds);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();


