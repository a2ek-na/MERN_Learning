function homePage(request, response){
    response.setHeader('Content-Type', 'text/html')
    response.write(`
        <head> <title> Home Page </title></head>
        <h1> Welcome to my Website...</h1>
        <a href = "/calculatorPage"> <button> 
        Go to the calculator button
        </button> </a>
        `)
    response.end();
}
module.exports = homePage;