const router = require('express').Router();
const RSVPRoutes = require('./api/RSVPRoutes.js');
const passwordRoutes =require('./api/passwordRoutes.js');

router.use('/rsvp', RSVPRoutes);
router.use('/passwordRoutes', passwordRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
