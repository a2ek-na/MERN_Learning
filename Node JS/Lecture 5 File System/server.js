const fs = require('fs');
fs.writeFile("file.txt", "Writing File again...", (err) =>{
    if(err) console.log("Error encountered!!!");
    else console.log("File is written Successfully!!!");
});

fs.writeFile("file.txt", "Abhishek Gupta...");