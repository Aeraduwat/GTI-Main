const express = require('express');
const connectarDB = require('./config/_connect');
const { use } = require('./routes/reunion');
const cors = require('cors');
// const mongoose = require('mongoose');

const app= express();

// //conectar db
// const connectDB =async()=>{
//     mongoose.set('strictQuery',true);
//     mongoose.connect("mongodb+srv://Felipe:admin123456@clusterbeta1.ybf4tdm.mongodb.net/test");

// }

// connectDB();
connectarDB();
app.use(cors());


app.use(express.json());

//api
app.use('/api/reuniones', require('./routes/reunion'));


// //demo
// app.get("/",(req,resp)=> {
//     resp.send("app is working")
// })


app.listen(4000);

console.log('desde app');