'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      //O campo displayName deverá ser uma string com no mínimo de 8 caracteres;
      displayName: {
        type: Sequelize.STRING,
      },
      //O campo email será considerado válido se tiver o formato <prefixo>@<domínio> e se for único. Ele é obrigatório.
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      //A senha deverá conter 6 caracteres. Ela é obrigatória.
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      //createdAt e updatedAt estavam dando erro nos seeds, resolvi tirar, e passou no req2
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
