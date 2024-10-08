const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const commandRoutes = require('./routes/commandRoutes');
const queryRoutes = require('./routes/queryRoutes');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb+srv://Luffy10:vbuSwfedbqywq2Fi@tp2test.g5ovc.mongodb.net/')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use(cors()); // Permite solicitudes CORS
app.use(bodyParser.json()); // Para poder parsear JSON en las peticiones

// Rutas
app.use('/api/commands', commandRoutes);
app.use('/api/queries', queryRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});