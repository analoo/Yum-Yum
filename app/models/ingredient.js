
module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define("Ingredient", {
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, { sequelize, modelName: "ingredient", timestamps: false });

    Ingredient.associate = models => {
    Ingredient.belongsToMany(models.Recipe, {
        through: "RecipeIngredient",
        as: "recipes",
        foreignKey: "ingredientId"
    });
    }

    return Ingredient;
}
