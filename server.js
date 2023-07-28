const db = require("./app/models/index")
const controller = require("./app/controllers/app.controller")

const main = async() => {
    // const user1 = await controller.createUser({ name: "operez"})
    // const user2 = await controller.createUser({ name: "lmartinez"})
    // const user3 = await controller.createUser({ name: "palvarez"})

    // const project1 = await controller.createProject(1, { name: "Proyecto 1"})
    // const project2 = await controller.createProject(2, { name: "Proyecto 2"})
    // const project3 = await controller.createProject(2, { name: "Proyecto 3"})


    const datosUsuario = await controller.consultarUsuario(2)
    console.log("Datos de usuario", JSON.stringify(datosUsuario, null,4));

    const datosProyecto = await controller.consultarProyecto(1)
    console.log("Datos de proyecto", JSON.stringify(datosProyecto, null, 4));

    const listaUsuarios = await controller.listarUsuarios()
    console.log("Listado de Usuarios", JSON.stringify(listaUsuarios, null,4));

    console.log("Ejecución exitosa");
}


db.sequelize.sync().then(resp => {
    console.log("BD sincronizada");
    main();
})