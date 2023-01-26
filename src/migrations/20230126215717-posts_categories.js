'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.createTable('posts_categories', {
    post_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
      allowNull: false,
    },
    category_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
      allowNull: false,
    }
  }),
  down: async (queryInterface, Sequelize) => await queryInterface.dropTable('posts_categories')
};
