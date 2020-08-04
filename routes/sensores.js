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
        sensores.sensores.push(newSensor)
        var str_sensores = JSON.stringify(sensores)
        // var sensores_sort = sensores.sensores.sort(function(a,b){
        //     return a - b;
        // });
        fs.writeFile(`./files/${body.archivo}.txt`,str_sensores,'utf8',function(err,results){
            if(err) return console.log(err)
            return res.status(200).json({ok:true,str_sensores,message:`Sensor ${body.ip} agregado en ${body.planta}`})
        })
    })
})

app.delete('/remover/sensor/:archivo/:ip',function(req,res){
    var params = req.params;
    // console.log(params)
    return res.status(200).json({ok:true,params})
})

module.exports = app;