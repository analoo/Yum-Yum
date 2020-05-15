module.exports = (sequelize, DataTypes) => {
    const Tags = sequelize.define("Tags", {
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
    return Tags;
};