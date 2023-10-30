


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,

  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

module.exports = sequelize;









// const Sequelize = require('sequelize');
// require('dotenv').config();


// // Conexão local
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: process.env.DATABASE_URL,
//       dialect: 'mysql'
//     });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Conectado ao banco de dados LOCAL com sucesso.');
//     return sequelize.sync({ alter: true });
//   })
//   .then(() => {
//     console.log('Banco de dados atualizado com sucesso.');
//   })
//   .catch(err => {
//     console.error('Erro ao conectar/atualizar o banco de dados:', err);
//   });

// module.exports = sequelize;



// mysql -h viaduct.proxy.rlwy.net -u root -p 5ghG-3C4d1b1A-hHAhDEcBFHHbFE466a --port 59385 --protocol=TCP railway




// require('dotenv').config();

// let sequelize;

// if (process.env.NODE_ENV === 'production') {
//   // Conexão de produção
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DATABASE_URL,
//     dialect: 'mysql'
//   });