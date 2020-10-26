const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')


//crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors());

//Habilitas express.json
app.use(express.json({extend: true}));

//puerto de la app
const PORT = process.env.PORT || 4000; //asigna el puerto o utiliza el 4000

//rutas
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/restaurantes', require('./routes/restaurantes'));


//arrancar la app
app.listen(PORT, () =>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
