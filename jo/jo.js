const fs = require("fs");
const jo = require("javascript-obfuscator");

fs.readFile('./jo/sensores.js',"UTF-8",function(err,data){
    if(err) return console.log(err);
    var obResult = jo.obfuscate(data);
    fs.writeFile('./jo/sens-obf.js',obResult.getObfuscatedCode(),function(err){
        if(err) return console.log(err);
    })
    console.log("El archivo SENS fue guardado.")
})

fs.readFile('./jo/main_temps.js',"UTF-8",function(err,data){
    if(err) return console.log(err);
    var obResult = jo.obfuscate(data);
    fs.writeFile('./jo/main-obf.js',obResult.getObfuscatedCode(),function(err){
        if(err) return console.log(err);
    })
    console.log("El archivo MAIN fue guardado.")
})

fs.readFile('routes/temp_hum.js',"UTF-8",function(err,data){
    if(err) return console.log(err);
    var obResult = jo.obfuscate(data);
    fs.writeFile('routes/temp_hum-obf.js',obResult.getObfuscatedCode(),function(err){
        if(err) return console.log(err);
    })
    console.log("El archivo ROUTES TEMP HUM fue guardado.")
})
