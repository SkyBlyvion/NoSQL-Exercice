import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config({path: "./config.env"});

// chargement config
const URI = process.env.MGBD_URI || "";

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

try {
    await client.connect();
    console.log("Connexion reussi a mongoDB");
} catch (err) {
    console.error(err);    
}

let db = client.db("DBLP");

export default db;