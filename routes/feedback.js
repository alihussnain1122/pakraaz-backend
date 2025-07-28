// routes/feedback.js
const express = require('express');
const router = express.Router();
const { submitFeedback, getAllFeedbacks } = require('../controllers/feedbackController');

// POST: Submit feedback
router.post('/submit', submitFeedback);

// GET: Get all feedbacks
router.get('/all', getAllFeedbacks);

module.exports = router;