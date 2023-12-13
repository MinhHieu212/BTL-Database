var sql = require("mssql");

    // config for your database
var config = {
    user: 'sa',
    password: '16112003',
    server: 'MAITRUNG',  
    database: 'DB_HBTT',
    trustServerCertificate: true,
};

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        console.log('Success');

        var request = new sql.Request();
        request.query('select id_product as id, name, price,  from Product', function(err, recordset){
            if (err) console.log(err);
            console.log(recordset);
        });
    });