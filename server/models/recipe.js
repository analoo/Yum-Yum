module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("Recipe", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        servingSize: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        activeTime: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        totalTime: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        directions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        originalRecipeID: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }       
    });

    Recipe.associate = models => {
        models.Recipe.hasMany(models.UserRecipes, {foreignkey: 'id'});
        models.Recipe.hasMany(models.RecipeTags, {foreignkey: 'id'});
        // models.Recipe.hasMany(models.RecipeIngredients, {foreignkey: 'id'});
    }
    return Recipe;
};

