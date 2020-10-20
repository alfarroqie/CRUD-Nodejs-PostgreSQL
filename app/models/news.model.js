module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define("news", {
      judul: {
        type: Sequelize.STRING
      },
      konten: {
        type: Sequelize.STRING
      },
      penulis: {
        type: Sequelize.STRING
      },
      rilis: {
        type: Sequelize.STRING
      },
      kategori: {
        type: Sequelize.STRING
      }
    });
  
    return News;
  };