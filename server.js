require('dotenv').config()

const mysql = require('mysql')
const express = require('express')
const exphbs = require("express-handlebars");

const app = express()
const PORT = 3000

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}
  
const db = new Database({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    insecureAuth : true
});


app.get('/', async function(req,res){
    const data = await db.query('SELECT * FROM wishes;')
    res.send(data)

    await db.close()

})

app.listen(PORT, function(){
    console.log('Listening PORT:',PORT)
})


// async function getData(){
//     const data = await db.query('SELECT * FROM wishes;')
//     console.log(data)
//     await db.close()
// }

// getData()