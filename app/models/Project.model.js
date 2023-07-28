module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    })
    return Project
}