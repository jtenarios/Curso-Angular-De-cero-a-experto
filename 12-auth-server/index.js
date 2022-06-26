const express = require('express');
const cors = require('cors');
const { dbConection } = require('./db/config');

//Cuando la aplicación cargue , lee el archivo .env y añade los valores a process.env
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Conexión a la Base de datos
dbConection();

// Directorio Público
// Aqui hacemos que express sirve la página index.html
app.use(express.static('public'))

// CORS, para aplicar un middleware
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Rutas
// cuando alguie haga una petición a la ruta  'api/auth', importamos el auth.js
app.use('/api/auth', require('./routes/auth'));

// Levantar la aplicación de express
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
});