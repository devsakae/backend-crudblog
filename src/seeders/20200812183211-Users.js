module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        display_name: 'Bill Gates',
        email: 'gates@microsoft.com',
        password: '123456',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg',
      },
      {
        id: 2,
        display_name: 'Steve Jobs',
        email: 'jobs@apple.com',
        password: '654321',
        image: 'https://blogdoiphone.com/wp-content/uploads/2017/11/Steve-Jobs.jpg',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
