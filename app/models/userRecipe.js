module.exports = (sequelize, DataTypes) => {
    const UserRecipe = sequelize.define("UserRecipe", {
        favorite: DataTypes.BOOLEAN,
        editedBy: DataTypes.INTEGER
    }, { timestamps: false });

    associate = models => {
        // Create Associations that use UserRecipe as the Join Table
        models.User.belongsToMany(models.Recipe, { through: models.UserRecipe });
        models.Recipe.belongsToMany(models.User, { through: models.UserRecipe });
        models.User.hasMany(models.UserRecipe);
        models.Recipe.hasMany(models.UserRecipe);
        models.UserRecipe.belongsTo(models.User);
        models.UserRecipe.belongsTo(models.Recipe);
    };

    return UserRecipe;
}

