module.exports = (sequelize, DataTypes) => {
    const Ingredients = sequelize.define("Ingredients", {
        ingredient: {
            type: DataTypes.STRING
        }
    });
    return Ingredients;
}
