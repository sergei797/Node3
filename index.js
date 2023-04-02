/* const fs = require('fs');
const axios = require('axios'); */
/* const http = require('http'); */
/* const { url } = require('inspector'); */

/* fs.writeFile('1.txt', 'hello', 'utf-8',(err) =>{

if (err){
    throw err;
}
    console.log('Done!');
})
fs.readFile('1.txt','utf-8',(err,data) =>{
    if(err){
        throw err;
    }
    console.log(data);
    })
;(async() => {
const{data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
console.log(data);
})(); */
/* http.createServer((request, response) =>{
  response.setHeader("Content-Type","text/html;charset=utf-8;");  
    if(request.url ==='/users'){
    response.write('Список пользователей');
    }
    else if(request.url === '/posts'){
        response.write('Список постов');
    }
    else if(request.url ==='/users-posts'){
        response.write('Список постов пользователей');
    }
    response.end();
})
.listen(3000); */
/* const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost', user:'root',

    database:'fitnes'});
    connection.query('SELECT * FROM Студенты;',
    (err,result) => {
        if(err) {
                throw err;
            }
            console.log(result);
    }); */
    const { Sequelize, DataTypes } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize({database: 'fitnes', host:'root',
  host: 'localhost', dialect:'mysql'
});

const User = sequelize.define('Студенты', {
  // Model attributes are defined here
  ФИО: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Курс: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

;(async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}});
