const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({credentials: true, origin: true}));

app.get('/', (req, res)=>{
	res.send({message: 'Ack from Server'});
}).listen(8080);