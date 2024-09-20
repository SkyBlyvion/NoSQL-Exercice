import express from 'express';
import db from '../db/dbcon.js';
import { ObjectId } from 'mongodb';

// init du router
const router = express.Router();

// route racine listant toutes les publications
router.get("/", async (req, res) => {
    let collection = db.collection('publis');
    let publications = await collection.find().toArray();
    if (!publications) {
        res.status(404).send("Aucune publication trouvée");
    } else {
        res.status(200).send(publications);
    }
});

export default router;
