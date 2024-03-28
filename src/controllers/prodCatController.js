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

    exports.getCategorieById = (req, res) => {
        return Categorie.findByPk(req.params.id)
        .then(categorie => {
        if(categorie === null) {
            const message = `La categorie de produit demandé n'existe pas. Réessayer avec un autre identifiant.`;
            return res.status(404).json({message});
        }
        const message = 'Une categorie de produit a bient été trouvé.';
        res.json({ message, data: categorie });
        })
        .catch(error => {
            const message = `Le produit n'a pas pu être récupéré. Réessayez dans quelque instants.`;
            res.status(500).json({message, data: error});
        })
}
