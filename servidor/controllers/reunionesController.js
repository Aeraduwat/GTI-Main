const Reuniones = require("../models/Reuniones");



exports.crearReunion = async (req,res) => {
    // console.log(req.body);

    try {
        let reunion;

        reunion = new Reuniones(req.body);

        await reunion.save();
        res.send(reunion);


    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.obtenerReuniones = async (req,res) =>{

    try {
        
        const reuniones = await Reuniones.find();
        res.json(reuniones);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }

}

exports.obtenerReunion = async (req,res) =>{
    try {
        
        let reunion = await Reuniones.findById(req.params.id);
        

        if(!reunion) {
            res.status(404).json({msg : 'No existe Reunion '});
        }

        res.json(reunion);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}

exports.actualizarReuniones = async (req,res) => {

    try {
        
        const {id_sh, cargo, regionAutoridad, fecha, unidadesParticipantes, tema, observaciones} = req.body;
        // console.log(req.body);
        let reunion = await Reuniones.findById(req.params.id);
        

        if(!reunion) {
            res.status(404).json({msg : 'No existe Reunion '});
        }

        reunion.id_sh = id_sh;
        reunion.cargo = cargo;
        reunion.regionAutoridad = regionAutoridad;
        reunion.fecha = fecha;
        reunion.unidadesParticipantes = unidadesParticipantes;
        reunion.proyecto = proyecto;
        reunion.tema = tema;
        reunion.observaciones = observaciones;



        reunion = await Reuniones.findByIdAndUpdate({ _id: req.params.id }, reunion, {new: true });
        res.json(reunion);
        
    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.eliminarReunion = async (req,res) =>{
    try {
        
        let reunion = await Reuniones.findById(req.params.id);
        

        if(!reunion) {
            res.status(404).json({msg : 'No existe Reunion '});
        }
        
        await Reuniones.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Producto eliminado'});

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}