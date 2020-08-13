# SNMP SERVER

### Características

- Monitoreo SNMP_V1,V2 o V3 para dispositivos de red basado en NodeJS;
- Soporte para sensores de temperatura y humedad marca AKCP.
- Modelos de sensores compatibles: @Sensorprobe2;
- Registro de inventario de sensores en la red:
  - Almacena listado de direcciones IP de los equipos a monitorear.
  
  ___REQUIERE INSTALAR NODE PACKAGES___

`$ npm install`
  
   #### server_snmp directory
```html
   server_snmp/
            config/
              config.js
            files/
            jo/
              jo.js
            routes/  
              index.js
              read_files.js
              sensores.js
            server.js
            ...
