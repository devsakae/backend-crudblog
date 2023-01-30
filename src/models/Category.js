const CategorySchema = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false
    });
  return Category;
};

module.exports = CategorySchema;