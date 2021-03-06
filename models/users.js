module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
           
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
};