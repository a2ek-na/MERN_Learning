const exp = require('express');
const bodyParser = require('body-parser');
const PORT = 3002;

const application = exp();


application.post('/submitForm', (req, res, next) => {
  console.log(req.url, req.method);
  console.log("The body is not defined here:", req.body);
  next();
});

application.use(bodyParser.urlencoded({}));

application.post('/submitForm', (req, res) => {
  console.log(req.url, req.method);
  console.log("The body is now defined:", req.body);
  res.send(`Hello ${req.body.fname} ${req.body.lname}, your form was submitted!`);
});


application.get('/', (req, res) => {
  console.log(req.url, req.method);
  res.setHeader("content-type", "text/html");
  res.write(`
    <form action="/submitForm" method="POST">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="Abhishek"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Gupta"><br><br>
        <input type="submit" value="Submit">
    </form>`);
  res.end();
});




application.listen(PORT, () => {
  console.log(`Server started running on http://localhost:${PORT}`);
});
