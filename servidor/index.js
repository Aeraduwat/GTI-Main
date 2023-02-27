const express = require('express');
const connectarDB = require('./config/_connect');
const { use } = require('./routes/reunion');
const http = require('http');
const cors = require('cors');
// const mongoose = require('mongoose');
const path = require('path');
const app= express();

const server = http.createServer(app)
/*
//Server production assets
if(procces.env.NODE_ENV == "production"){
    app.use(express.static(path.join("cliente/build")))
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,'cliente', 'dist', 'index.html'));
    })
}
*/

connectarDB();
app.use(cors());
app.use(express.json());

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "")

app.use(express.static(buildPath))

//api
app.use('/api/reuniones', require('./routes/reunion'));

app.use(express.static(path.join("../cliente/build")))
app.get("*",(req,res) => {
    res.sendFile(path.resolve(buildPath,'../cliente', 'build', 'index.html'));
})

/*
app.get("/*" , function(req, res){

    res.sendFile(
        path.join(_dirname, "../cliente/dist/index.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
})
*/
// //demo
// app.get("/",(req,resp)=> {
//     resp.send("app is working")
// })


app.listen(4000, () => console.log('Desde puerto 4000'));

console.log('desde app');