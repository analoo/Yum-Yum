module.exports = (sequelize, DataTypes) => {
    const RecipeIngredient = sequelize.define("RecipeIngredient", {
        amount: DataTypes.STRING,
        measurement: DataTypes.STRING
    },{ timestamps: false });

    RecipeIngredient.associate = models => {

      RecipeIngredient.belongsTo(models.Ingredient);
      RecipeIngredient.belongsTo(models.Recipe);
    }

    return RecipeIngredient;
}
