const server = require("./src/server");
const DBConect = require("./src/config/conDB");

const Port = 3000;

DBConect()
  .then(() => {
    server.listen(Port, () =>
      console.log(`Server is listering on port ${Port} `)
    );
  })
  .catch((err) => console.log("fallo en la conexion ", err.message));
