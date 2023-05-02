const users = 
[
  {
    username: 'Tove Lo',
    email: '',
    thoughts: [],
    friends: []
  },
  {
    username: 'Drake Graham',
    email: '',
    thoughts: [],
    friends: []
  },
  {
    username: 'bobbydoe', 
    email: '', 
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
// The function uses a loop to generate an array of objects, with each object 
// representing a thought and its associated friend reactions.
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
