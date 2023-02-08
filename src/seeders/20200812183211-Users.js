module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        display_name: 'Bill Gates',
        email: 'gates@microsoft.com',
        password: '123456',
        image: 'https://pt.wikipedia.org/wiki/Bill_Gates#/media/Ficheiro:Bill_Gates_2018.jpg',
      },
      {
        id: 2,
        display_name: 'Steve Jobs',
        email: 'jobs@apple.com',
        password: '654321',
        image: 'https://pt.wikipedia.org/wiki/Steve_Jobs#/media/Ficheiro:Steve_Jobs_Headshot_2010-CROP2.jpg',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
