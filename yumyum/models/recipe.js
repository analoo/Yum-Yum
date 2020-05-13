module.exports = (sequelize, DataTypes) {
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
        }

        
    });
    return Recipe;
};