const express = require('express')

const { getWeightPm } = require('../controllers/PmWeightController')


const router = express.Router();

router.get('/weightpm/:date', getWeightPm)

module.exports = router