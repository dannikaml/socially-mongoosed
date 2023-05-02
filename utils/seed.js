const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the Thoughts
  const thoughts = [];

  // Loop to add Thoughts to the Thoughts array
  for (let i = 0; i < 20; i++) {
    // Get some random thought objects using helper functions that we imported from ./data
    const reactions = getRandomThought(10);

    const thoughtText = `This is ${getRandomUser()}'s thought.`;
    const userId = Math.floor(Math.random() * (99 - 18 + 1) + 18);

    thoughts.push({
      thoughtText,
      userId,
      reactions,
    });
  }

  // Add Thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Create empty array to hold the Users
  const users = [];

  // Create a set to keep track of usernames that have already been used
  const takenUsernames = new Set();

  // Loop to add Users to the Users array
  for (let i = 0; i < 10; i++) {
    let username = getRandomUser();
    while (takenUsernames.has(username)) {
      // If the username is already taken, generate a new one
      username = getRandomUser();
    }
    takenUsernames.add(username);

    const email = `${username}@gmail.com`;
    const userThoughts = [];
    const userFriends = [];

    // Get a random number of thoughtIds between 1 and 5
    const numThoughts = Math.floor(Math.random() * 5) + 1;

    // Loop to add a random thought to the userThoughts array
    for (let j = 0; j < numThoughts; j++) {
      userThoughts.push(thoughts[Math.floor(Math.random() * thoughts.length)]);
    }

    // Get a random number of friendIds between 1 and 5
    const numFriends = Math.floor(Math.random() * 5) + 1;

    // Loop to add a random friend to the userFriends array
    for (let j = 0; j < numFriends; j++) {
      userFriends.push(users[Math.floor(Math.random() * users.length)]);
    }

    users.push({
      username,
      email,
      thoughts: userThoughts,
      friends: userFriends,
    });
  }

  // Add Users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

