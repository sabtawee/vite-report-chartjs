const MaWeightModel = require("../models/MaWeightModel");

const getWeight = async (req, res) => {
  try {
    let date = req.params.date
    const results = await MaWeightModel.sequelize.query(
      `SELECT no, coilno , weight , scantime, status from weights
      WHERE no IN (
        SELECT MAX(no) from weights where scantime like '${date}%'
        GROUP BY coilno)
      ORDER BY coilno ASC Limit 32`
    );
    res.json(results[0]);
  } catch (error) {
    console.log({ message: error.message })
  }
};

module.exports = { getWeight }
