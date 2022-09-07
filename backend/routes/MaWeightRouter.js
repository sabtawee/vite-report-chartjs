const express = require('express')

const { getWeight } = require('../controllers/MaWeightController')


const router = express.Router();

router.get('/weight/:date', getWeight)

module.exports = router