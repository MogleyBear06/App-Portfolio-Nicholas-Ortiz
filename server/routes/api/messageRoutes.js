const router = require('express').Router();
const { createMessage } = require('../../controllers/messageController');

router.route('/').post(createMessage);

module.exports = router;
