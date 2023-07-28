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