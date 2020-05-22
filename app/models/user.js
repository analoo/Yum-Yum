module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
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
        }
    });

    User.associate = models => {
        User.hasMany(models.UserRecipe);

        User.hasMany(models.Recipe);
    };

    return User;
};