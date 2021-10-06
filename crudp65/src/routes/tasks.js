const express = require('express');
const router = express.Router();
const productos = require('../models/task')


router.get('/tasks', async (req, res)=>{
    //res.send("Rutas de tareas");
    const products  = await productos.find();
    console.log(products);
    res.json(products);
});

router.post('/tasks', async(req, res)=>{
    //new productos();
    //console.log(new productos());
    //res.json(new productos());

    //Crear objeto:
    const productos_body= new productos(req.body);
    await productos_body.save(); //se guarda un datos
    console.log(productos_body)
    res.json({
        status:'Producto guardado'
    });
});

router.put('/tasks/:id', async(req, res)=>{
    //console.log(req.params.id);
    //res.json('recibido');
    await productos.findByIdAndUpdate(req.params.id, req.body);
    console.log(req.params.id);
    res.json({
        status: 'Producto actualizado'
    });

});

router.delete('/tasks/:id', async(req, res)=>{
    await productos.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Producto eliminado'
    })
});


module.exports = router;

