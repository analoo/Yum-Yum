module.exports = (sequelize, DataTypes) => {
    const RecipeIngredient = sequelize.define("RecipeIngredient", {
        amount: DataTypes.STRING,
        measurement: DataTypes.STRING,
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Recipe",
                key: "id"
            }
        },
        ingredientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Ingredient",
                key: "id"
            }
        }
    },{ timestamps: false });

    // RecipeIngredient.associate = models => {

      // RecipeIngredient.belongsTo(models.Ingredient)
        // RecipeIngredient.belongsTo(models.Recipe)
    // }

    return RecipeIngredient;
}
