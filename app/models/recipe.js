
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("Recipe", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:  DataTypes.TEXT,
        photo: DataTypes.STRING,
        servingSize: DataTypes.INTEGER,
        activeTime: DataTypes.INTEGER,
        totalTime: DataTypes.INTEGER,
        directions: DataTypes.TEXT,
        originalRecipeID: DataTypes.INTEGER,
        rating: DataTypes.INTEGER
    }, { sequelize, modelName: "recipe", timestamps: false  });

    Recipe.associate = models => {
        Recipe.belongsToMany(models.Ingredient, {
            through: "RecipeIngredient",
            as: "ingredients",
            foreignKey: "recipeId"
        })
    }


    return Recipe;
};

