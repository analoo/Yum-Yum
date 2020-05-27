
module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define("Ingredient", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        }
    }, { timestamps: false });

    Ingredient.associate = models => {
    Ingredient.hasMany(models.RecipeIngredient, {onDelete: "cascade"});
    }

    return Ingredient;
}
