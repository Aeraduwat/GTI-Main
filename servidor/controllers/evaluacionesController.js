const Evaluaciones = require("../models/Evaluaciones");


exports.crearEvaluacion = async (req,res) => {
   //  console.log(req.body);

    try {
        let evaluacion;

        evaluacion = new Evaluaciones(req.body);

        await evaluacion.save();
        res.send(evaluacion);


    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.obtenerEvaluaciones = async (req,res) =>{

    try {
        
        const evaluacion = await Evaluaciones.find();
        res.json(evaluacion);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }

}

exports.obtenerEvaluacion = async (req,res) =>{
    try {
        
        let evaluacion = await Evaluaciones.findById(req.params.id_sh);
        

        if(!evaluacion) {
            res.status(404).json({msg : 'No existe Evaluacion '});
        }

        res.json(evaluacion);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}

exports.obtenerPorSh = async (req,res) =>{

    try {
        
        const evaluacion = await Evaluaciones.find({"id_sh":req.params.id_sh});
        res.json(evaluacion);

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }

}

exports.actualizarEvaluacion = async (req,res) => {

    try {
        
        const {id_sh, adhesion, influencia} = req.body;
        // console.log(req.body);
        let evaluacion = await Evaluaciones.findById(req.params.id);
        

        if(!evaluacion) {
            res.status(404).json({msg : 'No existe Evaluación'});
        }

        evaluacion.id_sh= id_sh;
        evaluacion.influencia = adhesion;
        evaluacion.influencia = influencia;
        evaluacion.fecha  = Date.now();



        evaluacion = await Evaluaciones.findByIdAndUpdate({ _id: req.params.id }, evaluacion, {new: true });
        res.json(regievaluacionon);
        
    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }
}

exports.eliminarEvaluacion = async (req,res) =>{
    try {
        
        let evaluacion = await Evaluaciones.findById(req.params.id);
        

        if(!evaluacion) {
            res.status(404).json({msg : 'No existe Evaluacion '});
        }
        
        await Evaluaciones.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Evaluacion eliminada'});

    } catch (error) {
        console.log("Error :", error);
        res.status(500).send("ERROR");
    }


}