var express = require('express');
var router = express.Router();

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
AWS.config.update= {endpoint:""}
var db = new AWS.DynamoDB.DocumentClient();

router.get('/table-list', function(req, res, next) {
    
    var para={
        TableName:"dummyTemp"
    }
    console.log("Scanning Temperature");
    db.scan(para, );
    
    
    var params={
        TableName:"testTable",
    }
    console.log("Scanning Movies Table.");
    db.scan(params, onScan);
    function onScan(err, data){
        if(err){
            console.log("Unable to scan the table")
        }else{
            console.log("Scan Succeeded")
            console.log(data.Items);
            res.render('index',{
                items: data.Items
            }
            );
        }
    }
});

module.exports = router;