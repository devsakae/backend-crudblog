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
      as: 'Categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'Post',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
    })
  };
  return PostCategory;
};

module.exports = PostCategorySchema;