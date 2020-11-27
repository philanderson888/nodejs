const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.MLabConnectionString;
MongoClient.connect(url,{useUnifiedTopology:true,retryWrites:false},(error,database) => {
    if(error) throw error;
    const usersDb = database.db('jwt-authentication-database-2020-11');
    const users = usersDb.collection('users');
    const allUsers = users.findOne({username:'bob'},(error,user) => {
        console.log(`user`,user)
        database.close();
    })
});