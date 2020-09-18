const eployeeList = [
    {
        id: 1,
        name: "Alex",
        lName: "G",
        email: "alexG@email.com",
        position: "Associate Software Engineer"

    },
    {
        id: 2,
        name: "Arturo",
        lName: "N",
        email: "arturo@email.com",
        position: "Software Engineer"
    },
    {
        id: 3,
        name: "Cesar",
        lName: "N",
        email: "cesar@email.com",
        position: "Associate Software Engineer"
    },
    {
        id: 4,
        name: "Fernando",
        lName: "N",
        email: "fer@email.com",
        position: "Software Engineer"
    },
    {
        id: 5,
        name: "Simon",
        lName: "N",
        email: "simon@email.com",
        position: "Associate Software Engineer"
    }
]

eployeeList.forEach(elem => {
    if (elem.position === "Associate Software Engineer") {
        elem.isTraining = true;
    } else {
        elem.isTraining = false;
    }
});


const showEmployee = (item, filter, arr) => {
    return arr.filter(employee => employee[item] == filter)
}

console.log(showEmployee("isTraining", true, eployeeList));
//showEmployee("name", "Alex", eployeeList)
