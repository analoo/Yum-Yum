module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define("Ingredient", {
        ingredient: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    return Ingredient;
}
