const exp = require('express');
const PORT = 5001;
const server = exp();
const routers = require('./routes/module1');
const parser = require('body-parser');
const path = require('path');
const dataBase = require('./utilities/dataBase');

server.use(parser.urlencoded());
server.use('/abhishek', routers);
server.use('/style', exp.static(path.join(__dirname, "views", "style")));

dataBase(() => {
    server.listen(PORT, ()=>{
    console.log(`Server started running on http://localhost:${PORT}/abhishek`);
    });
});
