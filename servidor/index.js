const express = require('express');
const connectarDB = require('./config/_connect');
const { use } = require('./routes/reunion');
const http = require('http');
const cors = require('cors');
// const mongoose = require('mongoose');
const path = require('path');
const app = express();

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
app.use(cors());
app.use(express.json());

const _dirname = path.dirname("")
const buildPath = path.join(_dirname, "../cliente/src/app/")

app.use(express.static(buildPath))

/*
app.get("*",(req,res) => {
    res.sendFile(path.resolve(buildPath,'../cliente', 'src', 'index.html'));
})
*/

app.get("/*" , function(req, res){

    res.sendFile(
        path.join(_dirname, "../cliente/src/app/app.component.html"),
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
})


//api
app.use('/api/reuniones', require('./routes/reunion'));


// //demo
// app.get("/",(req,resp)=> {
//     resp.send("app is working")
// })


connectarDB();
server.listen(4000, () => console.log('Desde puerto 4000'));

console.log('desde app');