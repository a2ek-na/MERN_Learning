let formDetails = [];
module.exports = class details {
    constructor(name, mail, number, gender, about){
        this.name = name;
        this.email = mail;
        this.contactNumber = number;
        this.gender = gender;
        this.about = about;
    }

    saveInfo() {
       formDetails.push(this); 
    }

    getInfo(){
        return formDetails;
    }
} 