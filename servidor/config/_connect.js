const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async() =>{

    try {
        
        mongoose.set('strictQuery',false);
        // await mongoose.connect(process.env.DB_MONGO, {
        //     useNewParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify:false
        // });

        await  mongoose.connect(process.env.DB_MONGO);


        console.log('BD CONECTADA');

    } catch (error) {
        console.log('BD ERROR ', error);
    }

}
module.exports = conectarDB;