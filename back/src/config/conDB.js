const  {connect} = require('mongoose')

const URI = "mongodb+srv://yarod_br:Raqueta1997@cluster.fzhvrz8.mongodb.net/MoviesDB?retryWrites=true&w=majority&appName=Cluster";

const DBConect = async ()=>{

    await connect(URI);

};

module.exports= DBConect;