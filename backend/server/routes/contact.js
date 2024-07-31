const express = require('express');
const router = express.Router();
const contact = require('../controllers/contact');

router.post('/contact', async (req, res) => {
  const { user_name, user_email, message } = req.body;

  try {
    const emailSent = await contact(user_name, user_email, message);
    if (emailSent.success) {
      res.status(200).json({ message: emailSent.message });
    } else {
      res.status(400).json({ message: emailSent.message });
    }
  } catch (error) {
    res.status(500).json({ message: `Internal server error: ${error.message}` });
  }
});

module.exports = router;
