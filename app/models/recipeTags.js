module.exports = (sequelize, DataTypes) => {
    const RecipeTag = sequelize.define("RecipeTag", {
        Tag: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    associate = models => {
        // Create Associations that use RecipeTag as the Join Table
        models.Tag.belongsToMany(models.Recipe, { through: models.RecipeTag });
        models.Recipe.belongsToMany(models.Tag, { through: models.RecipeTag });
        models. Tag.hasMany(models.RecipeTag);
        models.Recipe.hasMany(models.RecipeTag);
        models.RecipeTag.belongsTo(models.Tag);
        models.RecipeTag.belongTo(models.Grant);
    };
    return RecipeTag;
};