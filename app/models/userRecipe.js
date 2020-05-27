module.exports = (sequelize, DataTypes) => {
    const UserRecipe = sequelize.define("UserRecipe",
        {
            edited:
            {
                type: DataTypes.BOOLEAN,
                default: false
            },
            favorite:
            {
                type: DataTypes.BOOLEAN,
                default: false
            },
            recipeScore:
            {
                type:DataTypes.INTEGER,

            },
            yumScore:
            {
                type:DataTypes.INTEGER,

            },
            comment:
            {
                type:DataTypes.TEXT,
            },
            userRecipeKey:
            {
                type:DataTypes.STRING,
                unique: true
            }
        }, 
        { timestamps: false }
    );

    UserRecipe.associate = models => {
        UserRecipe.belongsTo(models.User);
        UserRecipe.belongsTo(models.Recipe);
    };

    return UserRecipe;
};