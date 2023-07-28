const db = require("./app/models/index")
const controller = require("./app/controllers/app.controller")

const main = async() => {
    const user1 = await controller.createUser({ name: "operez"})

    console.log("Ejecución exitosa");
}


db.sequelize.sync().then(resp => {
    console.log("BD sincronizada");
    main();
})