module.exports = (sequelize, DataTypes) => {
    const bookTitle = sequelize.define('Book Title', {
        name: DataTypes.STRING,
    });
    const author = sequelize.define('Author', {
        name: DataTypes.STRING,
    });

    bookTitle.associate = (models) => {
        userName.hasMany(models.Post, {
            onDelete: 'cascade',
        });
    };

    author.associate = (models) => {
        userName.hasMany(models.Post, {
            onDelete: 'cascade',
        });
    };

    return bookTitle;
};