module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("Tag", {
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        }
    });
    
    return Tag;
};