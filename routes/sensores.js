const express = require('express');
const fs = require('fs');
const app = express();

app.post('/agregar/sensor',function(req,res){
    var body = req.body;
    var newSensor = {planta:body.planta,ip:body.ip}
    fs.readFile(`./files/${body.archivo}.txt`,'utf8',function(err,data){
        if(err){
            return console.log(err)
        }
        var sensores = JSON.parse(data)
        var filter = sensores.sensores.filter(obj => obj.ip === newSensor.ip)
        console.log(filter)
        if(filter != ""){
            console.log('Es diferente de []')
            return res.status(500).json({ok:false,message:`Sensor ${body.ip} ya existe.`})
        }
        sensores.sensores.push(newSensor)
        var str_sensores = JSON.stringify(sensores)
        fs.writeFile(`./files/${body.archivo}.txt`,str_sensores,'utf8',function(err,results){
            if(err) return console.log(err)
            return res.status(200).json({ok:true,sensores,message:`Sensor ${body.ip} agregado en ${body.planta}`})
        })
    })
});

app.delete('/remover/sensor/:archivo/:ip',function(req,res){
    var params = req.params;
    var obj = {}
    fs.readFile(`./files/${params.archivo}.txt`,'utf8',function(err,data){
        if(err) return console.log(err)
        var sensoresx = JSON.parse(data)
        var sensores = sensoresx.sensores.filter(obj => obj.ip != params.ip)
        obj = {sensores};
        var obj_str = JSON.stringify(obj)

        fs.writeFile(`./files/${params.archivo}.txt`,obj_str,'utf8',function(err,results){
            if(err) return console.log(err)
            return res.status(200).json({ok:true,obj})
        })
    })
});

module.exports = app;