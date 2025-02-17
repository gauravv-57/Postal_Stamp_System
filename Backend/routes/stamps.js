const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Get all stamps
router.get('/', async (req, res) => {
  try {
    // For now, return the static stamps data
    // Later, you can implement database storage for stamps
    res.json(stamps);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get stamp by ID
router.get('/:id', async (req, res) => {
  try {
    const stamp = stamps.find(s => s.id === parseInt(req.params.id));
    if (!stamp) {
      return res.status(404).json({ message: 'Stamp not found' });
    }
    res.json(stamp);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add stamp (protected route)
router.post('/', auth, async (req, res) => {
  try {
    // Implementation for adding stamps will come later
    res.status(501).json({ message: 'Not implemented yet' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router; 