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

app.get('/', (req, res) =>{
    res.send('Hola mundo')
})

//arrancar la app
app.listen(PORT, () =>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
