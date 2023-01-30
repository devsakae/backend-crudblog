const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    tableName: 'posts_categories', 
    underscored: true,
    timestamps: false
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categoryId',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'postId',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategory,
    })
  };
  return PostCategory;
};

module.exports = PostCategorySchema;