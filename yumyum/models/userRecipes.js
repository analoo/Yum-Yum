model.exports = (sequelize, DataTypes) {
    const UserRecipes = sequelize.define("UserRecipes", {
        favorite: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        editedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    });
    return UserRecipes;
}