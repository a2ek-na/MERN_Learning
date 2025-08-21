const http = require('http');
const exp = require('express');
const PORT = 9000;
const routerModule = require('./routes/module1');
const app = exp();
const parser = require('body-parser');

app.use(parser.urlencoded());
app.use('/abhishek', routerModule);

app.listen(PORT, ()=>{
    console.log(`Server started running on http://localhost:${PORT}/abhishek`);
})