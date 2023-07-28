const db = require("../models/index")
const { users, projects } = db 


exports.createUser = (user) => {
    return users.create(user).then(response => {
        console.log("usuario creado", JSON.stringify(response, null, 4));
        return response
    }).catch(err => {
        console.log("Error registrando usuario", err);
    })
}

exports.createProject = (userId, project) => {
    return projects.create({ ...project, userId: userId}).then(response => {
        console.log("proyecto creado", JSON.stringify(response, null, 4));
        return response
    })
}

exports.consultarUsuario = (userId) => {
    return users.findByPk(userId, { include: ["projects"]})
                .then(response => {
                    return response
                })
                .catch(err => {
                    console.log("Error consultando Usaurio", err);
                })
} 

exports.consultarProyecto = (projectId) => {
    return projects.findByPk(projectId, { include: ["user"]})
                .then(response => {
                    return response
                }).catch(err => {
                    console.log("Error consultando proyecto", err);
                })
}

exports.listarUsuarios = () => {
    return users.findAll({ include: ["projects"]})
                .then(response => {
                    return response
                })
                .catch(err => {
                    console.log("Error en listado de usuarios", err);
                })
}