import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/route.js';

// chargement de la config dans le module dotenv
dotenv.config({path: "./config.env"});

// definition du port
const PORT = process.env.PORT || 5000;

// preparation du serveur 
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

// Ecoute 
app.listen(PORT, () => {
    console.log(` Le serveur est demarré sur le port ${PORT}`);
});