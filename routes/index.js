const express = require('express');
const router = express.Router();

router.use(require('./depRoutes'));
router.use(require('./rolRoutes'));
router.use(require('./empRoutes'));

module.exports = router;