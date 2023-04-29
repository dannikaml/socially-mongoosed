const users = [
  {
  username: 'user1',
  email: 'user1@example.com',
  },
  {
  username: 'user2',
  email: 'user2@example.com',
  },
  {
  username: 'user3',
  email: 'user3@example.com',
  },
  ];
  
  const thoughts = [
  {
  thoughtText: 'This is my first thought',
  username: 'user1',
  userId: '1',
  reactions: [
  {
  reactionBody: '😀',
  username: 'user2',
  },
  ],
  },
  {
  thoughtText: 'This is my second thought',
  username: 'user2',
  userId: '2',
  reactions: [
  {
  reactionBody: '👍',
  username: 'user1',
  },
  {
  reactionBody: '❤️',
  username: 'user3',
  },
  ],
  },
  {
  thoughtText: 'This is my third thought',
  username: 'user3',
  userId: '3',
  reactions: [
  {
  reactionBody: '😄',
  username: 'user1',
  },
  {
  reactionBody: '🎉',
  username: 'user2',
  },
  {
  reactionBody: '👏',
  username: 'user3',
  },
  ],
  },
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomName = () =>
  ${getRandomArrItem(names)} ${getRandomArrItem(names)};
  
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
  
  module.exports = { users, thoughts, getRandomName, getRandomAssignments };
