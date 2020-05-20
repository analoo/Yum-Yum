module.exports = (sequelize, DataTypes) => {
    const UserRecipe = sequelize.define("UserRecipe", {
        favorite: DataTypes.BOOLEAN,
        editedBy: DataTypes.INTEGER
    }, { timestamps: false });

    UserRecipe.associate = models => {
        // Create Associations that use UserRecipe as the Join Table
        UserRecipe.belongsTo(models.User);
        UserRecipe.belongsTo(models.Recipe);
    };

    return UserRecipe;
}

