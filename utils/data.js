const User = require('../models/User');
const Thought = require('../models/Thought');

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};

const seedDatabase = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
  
  const users = await User.insertMany([
    { username: 'user1', email: 'user1@example.com' },
    { username: 'user2', email: 'user2@example.com' },
    { username: 'user3', email: 'user3@example.com' },
  ]);
  
  const thoughts = await Thought.insertMany([
    {
      thoughtText: 'This is my first thought',
      username: 'user1',
      userId: users[0]._id,
      reactions: [
        { reactionBody: '😀', username: 'user2' },
      ],
    },
    {
      thoughtText: 'This is my second thought',
      username: 'user2',
      userId: users[1]._id,
      reactions: [
        { reactionBody: '👍', username: 'user1' },
        { reactionBody: '❤️', username: 'user3' },
      ],
    },
    {
      thoughtText: 'This is my third thought',
      username: 'user3',
      userId: users[2]._id,
      reactions: [
        { reactionBody: '😄', username: 'user1' },
        { reactionBody: '🎉', username: 'user2' },
        { reactionBody: '👏', username: 'user3' },
      ],
    },
  ]);
  
  console.log('Database seeded!');
};

module.exports = { getRandomName, getRandomAssignments, seedDatabase };
