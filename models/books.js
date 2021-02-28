module.exports = function (sequelize, DataTypes) {
    const Book = sequelize.define("Book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cover: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });
    return Book;
};