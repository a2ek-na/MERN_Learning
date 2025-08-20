function calci(req, resp){
    resp.setHeader('Content-Type', 'text/html');
    resp.write(`
        <head><title>Calculator</title></head>
        <body>
            <form action='/result' method='POST'>
                <div> 
                    <label for="num1">Enter first number</label>
                    <input id='num1' name="number1" type="number" required />
                </div>
                <div> 
                    <label for="num2">Enter second number</label>
                    <input id='num2' name="number2" type="number" required />
                </div>
                <div> 
                    <button type="submit">Calculate the Result</button>
                </div>
            </form>
        </body>
    `);
    resp.end();
}


module.exports = calci;
