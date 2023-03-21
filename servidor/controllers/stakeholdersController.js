const SH = require("../models/Stakeholders");



exports.crearStakeholder = async (req,res) => {
   //  console.log(req.body);

    try {
        let stakeholder;

        stakeholder = new SH(req.body);

        await stakeholder.save();
        res.send(stakeholder);


    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.obtenerStakeholders = async (req,res) =>{

    try {
        
        const stakeholder = await SH.find();
        res.json(stakeholder);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }

}

exports.obtenerPorRegion = async (req,res) =>{

    try {
        
        const stakeholder = await SH.find({"id_region":req.params.id_region});
        res.json(stakeholder);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }

}

exports.obtenerStakeholder = async (req,res) =>{
    try {
        
        let stakeholder = await SH.findById(req.params.id);
        

        if(!stakeholder) {
            res.status(404).json({msg : 'No existe Stakeholder '});
        }

        res.json(stakeholder);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}

exports.actualizarStakeholder = async (req,res) => {

    try {
        
        const {nombre, id_region, cargo} = req.body;
        // console.log(req.body);
        let stakeholder = await SH.findById(req.params.id);
        

        if(!stakeholder) {
            res.status(404).json({msg : 'No existe Reunion '});
        }

        stakeholder.nombre = nombre;
        stakeholder.id_region = id_region;
        stakeholder.cargo = cargo;



        stakeholder = await SH.findByIdAndUpdate({ _id: req.params.id }, stakeholder, {new: true });
        res.json(stakeholder);
        
    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.eliminarStakeholder = async (req,res) =>{
    try {
        
        let stakeholder = await SH.findById(req.params.id);
        

        if(!stakeholder) {
            res.status(404).json({msg : 'No existe Stakeholder '});
        }
        
        await SH.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Stakeholder eliminada'});

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}