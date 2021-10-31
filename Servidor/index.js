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
const port = process.env.PORT || 4000; //asigna el puerto o utiliza el 4000

//rutas
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/restaurantes', require('./routes/restaurantes'));
app.use('/api/menus', require('./routes/menus'));
app.use('/api/secciones', require('./routes/secciones'));
app.use('/api/platillos', require('./routes/platillos'));
app.use('/api/mesas', require('./routes/mesas'));
app.use('/api/sesionesgenerales', require('./routes/sesionesgenerales'));
app.use('/api/sesionesindividuales', require('./routes/sesionesindividuales'));
app.use('/api/ordenes', require('./routes/orden'));
app.use('/api/platilloOrdenado', require('./routes/platilloOrdenado'));










//arrancar la app
app.listen(port, '0.0.0.0', () =>{
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
