const rasta = require('path');


exports.showForm = (request, response) =>{
    response.sendFile(rasta.join(__dirname, "../", "views", "form.html"));
}

exports.showSubmission = (request, response) =>{
    const data = request.body;
    console.log(data);
    response.sendFile(rasta.join(__dirname, "../", "views", "submission.html"))
}