const Regiones = require("../models/Regiones");



exports.crearRegion = async (req,res) => {
   //  console.log(req.body);

    try {
        let region;

        region = new Regiones(req.body);

        await region.save();
        res.send(region);


    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.obtenerRegiones = async (req,res) =>{

    try {
        
        const region = await Regiones.find();
        res.json(region);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }

}

exports.obtenerRegion = async (req,res) =>{
    try {
        
        let region = await Regiones.findById(req.params.id);
        

        if(!region) {
            res.status(404).json({msg : 'No existe Region '});
        }

        res.json(region);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}

exports.actualizarRegion = async (req,res) => {

    try {
        
        const {nombre, numero} = req.body;
        // console.log(req.body);
        let region = await Regiones.findById(req.params.id);
        

        if(!region) {
            res.status(404).json({msg : 'No existe Reunion '});
        }

        region.nombre = nombre;
        region.numero = numero;



        region = await Regiones.findByIdAndUpdate({ _id: req.params.id }, region, {new: true });
        res.json(region);
        
    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.eliminarRegion = async (req,res) =>{
    try {
        
        let region = await Regiones.findById(req.params.id);
        

        if(!region) {
            res.status(404).json({msg : 'No existe Region '});
        }
        
        await Regiones.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Región eliminada'});

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}