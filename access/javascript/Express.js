var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Connection = require('tedious').Connection;  
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/addUser', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    // Thêm mã để kết nối với SQL Server và thêm người dùng mới
    var config = {  
        server: 'THQNHNGQN\\THQNHNGQN',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: '', //update me
                password: ''  //update me
            }
        },
        options: {
            encrypt: true,
            database: 'Basic_Tutorial'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        if (err) console.log(err);
        executeStatement1(username, password);  
    });

    function executeStatement1(username, password) {  
        request = new Request("INSERT Table_user (username, password) OUTPUT INSERTED.ProductID VALUES (@username, @password);", function(err) {  
         if (err) {  
            console.log("Lỗi máy chủ",err);}  
        });  
        request.addParameter('username', TYPES.NChar, username);  
        request.addParameter('password', TYPES.NChar, password);  

        request.on('requestCompleted', function() {
            connection.close();
        });
        connection.execSql(request);  
    }

    res.send('Người dùng đã được thêm thành công!');
});

app.listen(3000, function() {
    console.log('App đang lắng nghe trên cổng 3000!');
});
