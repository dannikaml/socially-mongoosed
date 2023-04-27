const router = require('express').Router();
const { Thought } = require('../models');

// GET to get all thoughts
router.get('/thoughts', (req, res) => {
  res.status(200).json(thoughts);
});

// GET to get a single thought by its _id
router.get('/thoughts/:thoughtId', (req, res) => {
  const { thoughtId } = req.params;
  res.status(200).json(thought);
});

// POST to create a new thought
router.post('/thoughts', (req, res) => {
  const { thoughtText, username, userId } = req.body;
  res.status(200).json({ message: 'Thought created successfully' });
});

// PUT to update a thought by its _id
router.put('/thoughts/:thoughtId', (req, res) => {
  const { thoughtId } = req.params;
  const { thoughtText } = req.body;
  res.status(200).json({ message: 'Thought updated successfully' });
});

// DELETE to remove a thought by its _id
router.delete('/thoughts/:thoughtId', (req, res) => {
  const { thoughtId } = req.params;
  res.status(200).json({ message: 'Thought removed successfully' });
});

// POST to create a reaction stored in a single thought's reactions array field
router.post('/thoughts/:thoughtId/reactions', (req, res) => {
  const { thoughtId } = req.params;
  const { reactionBody, username } = req.body;
  res.status(200).json({ message: 'Reaction created successfully' });
});

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/thoughts/:thoughtId/reactions/:reactionId', (req, res) => {
  const { thoughtId, reactionId } = req.params;
  res.status(200).json({ message: 'Reaction removed successfully' });
});

module.exports = router;

