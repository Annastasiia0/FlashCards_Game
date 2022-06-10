module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Userthemes', [{
      user_id: '1',
      theme_id: '4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Userthemes', null, {});
  },
};
