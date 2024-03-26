const { Categorie } = require('../db/sequelize');

   exports.getAllCat = (req,res) => {
        return Categorie.findAll()
        .then(categorie => {
            const message = 'la liste des catégorie à bien été récupérée.';
            res.json({message, data: categorie});
        })
        .catch(error => {
            const message = `La liste des Catégories de produit n'a pas pu être récupérée. Réessayez dans quelques instants.`
            res.status(500).json({message, data: error});
        })
    }
