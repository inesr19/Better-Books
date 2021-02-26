module.exports = (sequelize, DataTypes) => {
    const userName = sequelize.define('User Name', {
        name: DataTypes.STRING,
    });
    const password = sequelize.define('Password', {
        name: DataTypes.STRING,
    });

    userName.associate = (models) => {
        userName.hasMany(models.Post, {
            onDelete: 'cascade',
        });
    };

    password.associate = (models) => {
        password.hasMany(models.Post, {
            onDelete: 'cascade',
        });
    };

    return userName;
};