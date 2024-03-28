const { Product } = require('../db/sequelize');
const product = require('../models/product');

exports.getAll = (req, res) => {
    return Product.findAll()
    .then(product => {
        const message = 'La liste des produit à bien été récupérés.';
        res.json({message, data: product});
    })
    .catch(error => {
        const message = `La liste des produits n'a pas pu être récupérée. Réessayer dans quelque instant.`
        res.status(500).json({message, data: error});
    })
}

exports.getProductById = (req, res) => {
    return Product.findByPk(req.params.id)
    .then(product => {
        if(product === null) {
            const message = `Le Produit demandé n'existe pas . Réessayer avec un autre identifiant.`;
            return res.status(404).json({message});
        }
        const message = 'Un produit a bient été trouvé.';
        res.json({ message, data: product });
    })
    .catch(error => {
        const message = `La catégorie de produit n'a pas pu être récupéré. Réessayez dans quelque instants.`;
        res.status(500).json({message, data: error});
    })
}