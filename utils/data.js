const users = 
[
  {
    username: 'Tove Lo',
    email: 'wearesmart@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'Drake Graham',
    email: 'stilltrying@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'bobbydoe', // changed the username to something else
    email: 'bobdoe@example.com', // changed the email to avoid duplicates
    thoughts: [],
    friends: []
  },
];


const thoughts = 
[
  {
    thoughtText: 'This is my first thought',
    username: 'johnsmith',
    userId: 1,
    reactions: []
  },
  {
    thoughtText: 'This is my second thought',
    username: 'janesmith',
    userId: 2,
    reactions: []
  },
  {
    thoughtText: 'This is my third thought',
    username: 'bobbydoe', 
    userId: 3,
    reactions: []
  }
];


// Get a random item given an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random user
const getRandomUser = () =>
`${getRandomItem(users).username}`;

// Gets random thought for a user
const getRandomThought = (int) => {
const results = [];
for (let i = 0; i < int; i++) {
  results.push({
    userThoughts: getRandomItem(thoughts),
    friendReactions: Math.floor(Math.random() * (99 - 70 + 1) + 70),
  });
}
return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThought };
