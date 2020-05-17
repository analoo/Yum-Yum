module.exports = (sequelize, DataTypes) => {
    const RecipeIngredient = sequelize.define("RecipeIngredient", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenet: true,
            allowNull: false
        },
        amount: DataTypes.STRING,
        measurement: DataTypes.STRING
    },{ timestamps: false });

    RecipeIngredient.associate = models => {
    // Create Associations that use RecipeIngredient as the Join Table
    
    }

    return RecipeIngredient;
}
