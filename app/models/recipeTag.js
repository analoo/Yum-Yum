module.exports = (sequelize, DataTypes) => {
    const RecipeTag = sequelize.define("RecipeTag", {
        category: DataTypes.STRING,
    });

RecipeTag.associate = models => {
    models.Tag.belongsToMany(models.Recipe, { through: models.RecipeTag });
    models.Recipe.belongsToMany(models.Tag, { through: models.RecipeTag });
    models.Tag.hasMany(models.RecipeTag);
    models.Recipe.hasMany(models.RecipeTag);
    models.RecipeTag.belongsTo(models.Tag);
    models.RecipeTag.belongsTo(models.Recipe);
};
return RecipeTag;
};