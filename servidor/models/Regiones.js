const mongoose = require('mongoose');

const RegionesSchema = mongoose.Schema({
    id:{
        type: Number,
        required: false
    },
    nombre:{
        type: String,
        required: true
    },
    numero:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Regiones',RegionesSchema);