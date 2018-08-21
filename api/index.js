 //permite utilizar nuevas características de nuevos estándares de js
 'use strict'
//permite conectarse a mongo y trabajar con la db
 var mongoose = require('mongoose');
 var app = require('./app');
 var port = 3800;
//promesa para conectarse a mongo
 mongoose.Promise = global.Promise;
 //conexión db
 mongoose.connect('mongodb://localhost:27017/curso_mean_social', {useMongoClient: true})
        .then(()=>{
            console.log('La conexión a la base de datos curso_mean_social ha sido exitosa!!');

            //Crear servidor
            app.listen(port, ()=>{
                console.log('Servidor corriendo en http://localhost:3800');
            })
        })
        .catch(err => console.log(err));