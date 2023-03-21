const mongoose = require('mongoose');

const StakeholdersSchema = mongoose.Schema({
    id:{
        type: Number,
        required: false
    },
    nombre:{
        type: String,
        required: true
    },
    id_region:{
        type: String,
        required: true
    },
    cargo:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Stakeholders',StakeholdersSchema);