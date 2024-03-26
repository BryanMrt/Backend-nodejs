module.exports = (sequelize, DataTypes) => {
    return sequelize.define('categorie', {
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
        }
    }, {
        tableName: 'categorie',
        timestamps: false,
    })
}