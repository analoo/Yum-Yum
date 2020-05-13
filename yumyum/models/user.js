module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
    });

    User.associate = models => {
        models.User.hasMany(models.UserRecipes, {foreignkey: 'id'}
        , {
            onDelete: "cascade"
        });
    }
    return User;
};