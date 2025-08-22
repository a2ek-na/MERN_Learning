const path = require('path');
const details = require('../model/data');

exports.getForm = (request, response, next)=> {
    response.sendFile(path.join(__dirname, "../", "views", "form.html"));
};

exports.showForm = (request, response, next) => {
    const tempData = request.body;
    const data = new details(tempData.Name, tempData.mail, tempData.number, tempData.gender);
    data.saveInfo();
    console.log(data.getInfo());
    response.sendFile(path.join(__dirname, "../", "views", "submitForm.html"));
};
