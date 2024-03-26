module.exports = (sequelize, DataTypes) => {
    return sequelize.define('produit', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Le nom est déjà pris.'
              },
            validate: {
              notEmpty: {msg: 'Le nom ne peut pas être vide.'},
              notNull: {msg: 'Le nom est une propriété requise.'},
            }             
        },
        prix: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        id_categorie: {
            type: DataTypes.INTEGER,
            foreignKey: 'FK1',
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'produit',
        timestamps: false,
    })
}