const exp = require('express');
const PORT = 3000;
const app = exp();
const routes = require('./routes/module1');
const parser = require('body-parser');

app.use(parser.urlencoded());
app.use('/abhishek', routes);

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})