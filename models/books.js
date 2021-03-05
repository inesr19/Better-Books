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
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cover: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    });
    return Book;
};