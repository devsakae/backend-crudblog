module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('blog_posts', [
      {
        id: 1,
        title: 'The future our grandchildren deserve',
        content: 'I turned 67 in October. It\'s hard to believe I\'m that old—in America, most people my age are retired! But I won\'t be slowing down anytime soon. I\'m still going full speed on the project I began more than two decades ago, which is to give...',
        user_id: 1,
        published: new Date('2022-12-20T19:58:00.000Z'),
        updated: new Date('2022-12-20T19:58:51.000Z'),
      },
      {
        id: 2,
        title: 'A new blog is born : all things Steve Jobs opens!',
        content: 'Hello World! This is the very first post of all things Steve Jobs, a blog dedicated absolutely and entirely to our beloved hero Steve Jobs, and a nice addition to my “old” website all about Steve Jobs.com. I am starting the blog under the radar for...',
        user_id: 2,
        published: new Date('2010-09-12T11:02:00.000Z'),
        updated: new Date('2010-09-12T11:02:31.000Z'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('blog_posts', null, {});
  },
};
