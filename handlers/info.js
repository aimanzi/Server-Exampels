function mainPage(req, res) {
    res.end("<h1>Wellcom To Home Page</h1><h1>The Server Is Working</h1>")
}

function employeeInfo(req, res) {
    console.log("employeeInfo Handler is working");
    let info = [{
        name: "Zidane Aiman",
        company: "Ferrero-Israel",
        job: "Key Account",
        divition: "Sales - Wholsalers",
        manager: "Loir J",
    },
    {
        name: "Zidane Eiman",
        company: "Mistrey Of Education",
        job: "Teacher",
        divition: "Matya",
        manager: "Eiman A",
    }];
    let jobInfo = JSON.stringify(info)
    res.send(jobInfo);

}

function personalInfo(req, res) {
    console.log("pesonalInfo Handler is working");
    let person = [{
        fname: "Aiman",
        lname: "Zidane",
        age: 42
    },
    {
        fname: "Eiman",
        lname: "Zidane",
        age: 40
    }]
    let personinfo = JSON.stringify(person)
    res.end(personinfo);
}


module.exports = { mainPage, personalInfo, employeeInfo }