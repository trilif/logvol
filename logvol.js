const express = require('express');
const app = express();

const { Client } = require('pg');

const client = new Client({
user: 'postgres',
host: 'localhost',
database: 'logvol',
password: 'postgres',
port: 5432,
})
client.connect();

app.get('/:a/:length/:d', (req, res)=>{
	res.header('Access-Control-Allow-Origin', "*");
	//next lines against SQL Injection!
	const FF = ["T","CS","B","A","GYEKL","NY","ELL","F"];
	if(FF.includes(req.params.a)&&req.params.d>=12&&req.params.d<=100&&req.params.length>=10&&req.params.length<=60){
    client.query('SELECT l'+req.params.length+' as vol FROM '+req.params.a+' WHERE d=' +req.params.d, (err, result)=>{
		
        if(!err){
            res.send(''+result.rows[0].vol);
        }
    });
	}else{res.send("check input params!")};
    client.end;
})

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})