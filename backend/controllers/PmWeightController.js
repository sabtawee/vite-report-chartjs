const MaWeightModel = require("../models/MaWeightModel");

const getWeightPm = async (req, res) => {
  try {
    let date = req.params.date
    const results = await MaWeightModel.sequelize.query(
      `SELECT no, nodemcu, coilno , weight , scantime, status from setupcoil.weights
      WHERE no IN (
        SELECT MAX(no) from setupcoil.weights where scantime like '${date} %'
        GROUP BY nodemcu)
      ORDER BY coilno ASC`
    );
    res.json(results[0]);
  } catch (error) {
    console.log({ message: error.message })
  }
};

module.exports = { getWeightPm }
