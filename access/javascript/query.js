var Connection = require('tedious').Connection;
var config = {
    server: 'THQNHNGQN\THQNHNGQN',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: '', //update me
            password: ''  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'Basic_Tutorial'  //update me
    }
};
var connection = new Connection(config);
connection.on('connect',
    function (err) {
        if(err){
            console.log("Kết nối máy chủ thất bại", err);
        }else{
            console.log("Kết nối thành công");
        }
    });

connection.connect();