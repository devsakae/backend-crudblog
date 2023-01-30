const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'blog_posts', 
    underscored: true,
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'author',
    })
  };
  return BlogPost;
};

module.exports = BlogPostSchema;