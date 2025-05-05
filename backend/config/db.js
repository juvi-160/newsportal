const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('newsportal', 'root','',
    {
        host : 'localhost',
        dialect : 'mysql'
    }
)

module.exports = sequelize;