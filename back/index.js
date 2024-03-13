const app = require('./src/services/server')

const PORT = 3000;

app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`))