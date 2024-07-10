const db = require('./db'); 
const User = db.sequelize.define('User', { 
id_ser: {  
type: db.Sequelize.INTEGER,  
autoIncrement: true,  
allowNull: false,  
primaryKey: true  
},  
login: {  
type: db.Sequelize.TEXT  
}, 
senha: {  
type: db.Sequelize.TEXT  
} 
}, { freezeTableName: true });  
User.sync({force: true}); 
module.exports = User; 
