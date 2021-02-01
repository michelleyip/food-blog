const mysql= require('mysql');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'password',
    port: 3306,
    database:'food_db',
});

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));



// connection.connect((err)=>{
//     if (err) throw err;
//     console.log('Connection to DB');

//     connection.query("SELECT * FROM recipe_post", function (err, result, fields) {
//         if(err) throw err;
//         console.log(result);
// });
// });

app.get('/latestrecipes',function(req,res){
    connection.connect(function(error){
        const query = connection.query('SELECT * FROM recipe_post ORDER BY recipe_id DESC LIMIT 3', function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
        console.log(query.sql);
    });
});

app.get('/allrecipes',function(req,res){
    connection.connect(function(error){
        const query = connection.query('SELECT * FROM recipe_post ORDER BY recipe_id DESC', function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
        console.log(query.sql);
    });
});

app.get('/searchby/:search/:option',function(req,res){
    let post_search  ="";
    if (req.params.search==="Cuisine"){
        post_search = "recipe_cuisine";
    }
    else if (req.params.search==="Category"){
        post_search = "recipe_category";
    }
    else{}
    let post_option = req.params.option;

    connection.connect(function(error){
        const query = connection.query('SELECT * FROM recipe_post WHERE '+post_search+'= ?',post_option, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
        console.log(query.sql);
    });
});

app.get('/singlerecipe/:id',function(req,res){
    let post_id  = parseInt(req.params.id);
    console.log(post_id);

    connection.connect(function(error){
        const query = connection.query('SELECT * FROM recipe_post WHERE recipe_id = ?', post_id ,function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
        console.log(query.sql);
    });
});

app.post('/addrecipe',function(req,res){
    connection.connect(function(error){
        // const post = JSON.stringify(req.body);
        const post = req.body;
        console.log("The data "+post);
        const query = connection.query('INSERT INTO recipe_post SET ?', post ,function (err, result, fields) {
            if (err) throw err;
        });
        console.log(query.sql);
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/express_backend',(req,res)=>{
    res.send({express:'YOUR EXPRESS BACKEND IS CONNECTED'});
    // console.log("Backend connected");
});