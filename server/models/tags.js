module.exports = (sequelize, DataTypes) => {
    const Tags = sequelize.define("Tags", {
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    Tags.associate = models => {
        models.Tags.hasMany(models.UserRecipes,
            {foreignkey: "id"});
    };
    return Tags;
};