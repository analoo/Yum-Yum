
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("Recipe", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: DataTypes.STRING,
        servingSize: DataTypes.STRING,
        activeTime: DataTypes.INTEGER,
        totalTime: DataTypes.INTEGER,
        directions: DataTypes.TEXT,
        source: DataTypes.TEXT,
        ratingAverage: DataTypes.FLOAT,
        ratingCount: DataTypes.INTEGER,
        ratingTotal: DataTypes.INTEGER
    }, { timestamps: false  });

    Recipe.associate = models => {
        Recipe.hasMany(models.RecipeIngredient,{onDelete: "cascade"});

        Recipe.hasMany(models.UserRecipe);

        Recipe.belongsTo(models.User);
        };
    

    return Recipe;
};

