function mainPage(req, res) {
    res.end("<h1>Wellcom To Home Page</h1><h1>The Server Is Working</h1>")
}

function employeeInfo(req, res) {
    console.log("employee information has calles");
    let info = [{
        name:"aiman",
        company: "Ferrero-Israel",
        job: "Key Account",
        divition: "Sales - Wholsalers",
        manager: "Loir J",
    },
    {
        name:"eiman",
        company: "Mistrey Of Education",
        job: "Teacher",
        divition: "Matya",
        manager: "Eiman A",
    }];
    let jobInfo = JSON.stringify(info)
    res.end(jobInfo);
}

function personalInfo(req, res) {
    console.log("personal information has calles");
    let person = [{
        fname: "aiman",
        lname: "zidane",
        age: 42
    },
    {
        fname: "eiman",
        lname: "zidane",
        age: 40
    }]
    let personinfo = JSON.stringify(person)
    res.end(personinfo);
}


module.exports = { mainPage, personalInfo, employeeInfo }