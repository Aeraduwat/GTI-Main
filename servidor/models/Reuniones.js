const mongoose = require('mongoose');

const ReunionesSchema = mongoose.Schema({
    id:{
        type: Number,
        required: false
    },
    id_sh:{
        type: String,
        required: true
    },
    cargo:{
        type: String,
        required: true
    },
    regionAutoridad:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        required: true
        // default: Date.now
    },
    unidadesParticipantes:{
        type: String,
        required: true
    },
    proyecto:{
        type: String,
        required: true
    },
    tema:{
        type: String,
        required: true
    },
    observaciones:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Reuniones',ReunionesSchema);