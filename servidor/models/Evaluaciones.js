const mongoose = require('mongoose');

const EvaluacionesSchema = mongoose.Schema({
    id:{
        type: Number,
        required: false
    },
    id_sh:{
        type: String,
        required: true
    },
    adhesion:{
        type: Number,
        required: true
    },
    influencia:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Evaluaciones',EvaluacionesSchema);