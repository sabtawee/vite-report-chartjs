const Sequeliize = require('sequelize')

const db_ma = new Sequeliize("setupcoil_ma", "root", "P@ssw0rd", {
    host: "10.121.42.48",
    dialect: "mysql",
    define:{
        timestamps: false,
    },
})

module.exports = db_ma;

// const db_pm = new Sequeliize("setupcoil", "root", "P@ssw0rd", {
//     host: "10.121.42.48",
//     dialect: "mysql",
//     define:{
//         timestamps: false,
//     },
// })

// module.exports = db_pm;


// const db_hb = new Sequeliize("setup_stator", "root", "P@ssw0rd", {
//     host: "10.121.42.48",
//     dialect: "mysql",
//     define:{
//         timestamps: false,
//     },
// })

// module.exports = db_pm;