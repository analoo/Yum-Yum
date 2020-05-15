module.exports = (sequelize, DataTypes) => {
    const RecipeTags = sequelize.define("RecipeTags", {
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return RecipeTags;
};