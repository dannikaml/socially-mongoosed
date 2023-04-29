const router = require('express').Router();
const { Thought } = require('../../models');

// GET to get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET to get a single thought by its _id
router.get('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'No thought found with this id!' });
    }
    res.status(200).json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// POST to create a new thought
router.post('/', async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    res.status(200).json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// PUT to update a thought by its _id
router.put('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!thought) {
      return res.status(404).json({ message: 'No thought found with this id!' });
    }
    res.status(200).json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE to remove a thought by its _id
router.delete('/:thoughtId', async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: 'No thought found with this id!' });
    }
    res.status(200).json({ message: `Thought ${thought._id} has been deleted!` });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
