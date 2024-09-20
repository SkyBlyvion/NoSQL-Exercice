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

// route pour un seul publication
router.get("/publication/:id*", async (req, res) => {
    let collection = db.collection('publis');
    // let publication = await collection.findOne({ "_id": req.params.id }); // aller chercher le query string identifié par id 
    if (!publication) {
        res.status(404).send("La publication n''existe pas");
    } else {
        res.status(200).send(publication);
    }
});

// route pour ajouter une publication
// TODO: corriger
router.post("/addPub", async (req, res) => {
   try {
    let collection = db.collection('publis');
    let publication = req.body;
    let result = await collection.insertOne(publication);
    if(result){
        res.status(200).send('la publication est ajoutée');
    } else {
        res.status(500).send("une erreur est survenue lors de l''insertion");
    }
   } catch (error) {
    res.status(500).send(`une erreur est survenue : ${error}`);
   } 
});

// mise a jour de la publication
router.put("/editPub/:id", async (res, req) => {
    try {
        let collection = db.collection("publis");
        let publication = req.body;
        let result = await collection.updateOne({"_id": req.params.id}, {$set: publication});
        res.statut(200).send("la publicxation est moidifie avec succés")
    } catch (error) {
        res.status(500).send(`une erreur est survenue : ${error}`);
    } 
});

export default router;
