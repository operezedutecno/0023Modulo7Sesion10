const Sequelize = require("sequelize");

const sequelize = new Sequelize("proyectos","postgres","postgres",{
                            host: "localhost",
                            port: 5432,
                            dialect: "postgres"
})


const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

db.users = require("./User.model")(sequelize, Sequelize)
db.projects = require("./Project.model")(sequelize, Sequelize)

db.users.hasMany(db.projects, {
    as: "projects"
})

db.projects.belongsTo(db.users, {
    foreignKey: "userId",
    as: "user"
})


module.exports = db