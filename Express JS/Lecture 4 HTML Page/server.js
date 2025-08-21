const exp = require('express');
const PORT = 3001;
const mainModule = require('./routes/module1');
const app = exp();
const path = require('path');


app.use('/abhishek', mainModule);
app.use('/style', exp.static(path.join(__dirname, "views", "style")));

app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}/abhishek`);
});