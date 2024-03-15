const server = require('./src/server');


const Port = 3000;

server.listen(Port,()=>console.log(`Server is listering on port ${Port} `))