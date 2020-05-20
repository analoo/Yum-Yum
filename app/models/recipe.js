
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
        source: DataTypes.TEXT,
        originalRecipeID: DataTypes.INTEGER,
        rating: DataTypes.INTEGER
    }, { timestamps: false  });

    Recipe.associate = models => {
        Recipe.hasMany(models.RecipeIngredient,{onDelete: "cascade"});
        Recipe.belongsToMany(models.User, { through: "UserRecipe" });
        Recipe.hasMany(models.UserRecipe);
        };

    return Recipe;
};

