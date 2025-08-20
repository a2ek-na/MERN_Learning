function formModule(request, response) {
    console.log(request.url);
    console.log(request.method);
    console.log();
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(`<h1>Hey There, Welcome to my Website...</h1>`)
    response.write(`
        <h2>Fill the Registration form below...</h2>
            <button onclick="window.location.href='/form';">
            Start filling Now....
        </button>`)
    response.end();
}


module.exports = {
    formModule,
};
