const exp = require('express');
const PORT = 3000;
const app = exp();
const router = require('./router/module');

app.use('/abhishek', router);

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}/abhishek`);
})