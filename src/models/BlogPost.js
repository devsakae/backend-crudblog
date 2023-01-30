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
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'blog_posts', 
    underscored: true,
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    })
    // ,
    // BlogPost.hasMany(models.Category, {
    //   foreignKey: 'id',
    //   as: 'categories',
    // })
  };
  return BlogPost;
};

module.exports = BlogPostSchema;