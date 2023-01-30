const CategorySchema = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'categories', 
    underscored: true,
    timestamps: false
  });
  // Category.associate = (models) => {
  //   Category.belongsTo(models.PostCategory, {
  //     as: 'category_id',
  //     foreignKey: 'id',
  //   })
  // };
  return Category;
};

module.exports = CategorySchema;