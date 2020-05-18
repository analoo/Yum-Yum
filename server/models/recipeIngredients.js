module.exports = (sequelize, DataTypes) => {
    const RecipeIngredients = sequelize.define("RecipeIngredients", {
        amount: {
            type: DataTypes.STRING,
        },
        measurement: {
            type: DataTypes.STRING
        }
    });
    return RecipeIngredients;
};
