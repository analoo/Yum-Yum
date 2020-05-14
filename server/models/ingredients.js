module.exports = (sequelize, DataTypes) => {
    const Ingredients = sequelize.define("Ingredients", {
        ingredient: {
            type: DataTypes.STRING
        }
    });
    Ingredients.associate = models => {
        models.Ingredients.hasMany(models.RecipeIngredients, { foreignkey: 'id' });
    };
    return Ingredients;
}
