# Donner Droits 
 - sudo chown cd2groupea:cd2groupea datascript/

# Creation collections - Commandes

 - use cdacfa # Crée la table
 - use DBLP
 - show dbs

 - db.eleves.insertOne({prenom: "Mathis"});
 - db.eleves.insertOne({prenom: "Thomas"});
 - db.eleves.insertOne({prenom: "Clara", cheveux: "Blond"});
 - db.eleves.insertOne({animal: "Chat", couleur: "Roux"});

 - db.eleves.insertMany([{prenom:"Nicolas"},{prenom:"Mathieu"}])

 - db.eleves.find() # Retourne tous les éléments
 - db.eleves.findOne({prenom: "Mathis"}) # Retourne que l'objet
 - db.eleves.find().limit(2) # Retourne les 2 premieres entreés
 - db.eleves.find({age:{$lte: 26 }})  # Retourne les éléments dont l'age est inférieur ou égal à 26
 - db.eleves.find({age:{$lte: 23 }}, {prenom:1}) # prenom + age
 - db.eleves.find({age:{$lte: 23 }}, {prenom:1, _id: 0}) # Renvoie seulement le prenom

 - db.eleves.count() # Deprecated but still works
 - db.eleves.countDocuments()

 - db.eleves.updateOne({prenom:"Mathis"},{$set: {age: 24}})
 - db.eleves.updateOne({prenom:"Mathieu"},{$set: {age: 22}})

 - db.eleves.deleteOne({_id:ObjectId("66ed36f9ce9eee6dc4964036") })

 - db.eleves.updateOne({_id: ObjectId('66ed36dfce9eee6dc4964035')}, {$unset:{cheveux:1}})


# On va inserer un fichier de données sur lequel on va travailler.
 - dblp.json in /Documents/CDA/Basenosql/datascript
 - docker exec -it cdamongo mongoimport --host localhost:27017 --db DBLP --collection publis --jsonArray --type json --file /datascript/dblp.json -u admin -p 'admin' --authenticationDatabase admin # import
 - use DBLP 
 - show collections # Renvoie publis

 - db.publis.find({type:"Book"})
 - db.publis.find({year:{$gte:2011}})
 - db.publis.find({type:"Book", year:{$gte:2011}})

 - db.publis.distinct("publisher")
 - db.publis.distinct("author")
 - db.publis.distinct("type")

 - db.publis.aggregate([{$match:{authors:"Toru Ishida"}}, {$sort: {title:1, "pages.start":1 }}])
 - db.publis.aggregate([{$match:{authors:"Toru Ishida"}}, {$sort: {title:1, "pages.start":1 }}, {$project: {title:1, pages:1}}])
