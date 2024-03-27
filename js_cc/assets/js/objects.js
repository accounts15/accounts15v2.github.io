
let arrFruit = ["item1", "item2", 1, true, undefined];

//key value pair
var objPerson = {
    firstName: "Jesthony",
    lastName: "Morales",
    isMarried: true,
    age: 34,
    skills: ["Web Dev", "Coaching"],
    status: function() {
        return "Teaching";
    },
    addresses: {
        province: 'Catanduanes',
        current: 'Mandaluyong'
    }
};

//Object Destructure

// var { ages = 31, firstName, addresses, status: stat } = objPerson;

// console.log(ages);

// ToDisplay(objPerson);

function ToDisplay( {firstName, lastName, age, isMarried, skills, addresses, status: stat} ) {
    
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(isMarried);
    console.log(skills.join(", "));
    console.log(addresses.province + " " + addresses.current);
    console.log(stat());

    // console.log(obj.firstName);
    // console.log(obj.lastName);
    // console.log(obj.age);
    // console.log(obj.isMarried);
    // console.log(obj.skills.join(", "));
    // console.log(obj.addresses.province + " " + obj.addresses.current);
    // console.log(obj.status());
}

var objStudents = [
    {
        name: "John Dela Cruz",
        age: 24,
    },
    {
        name: "Jessica Velasquez",
        age: 21,
    },
    {
        name: "Bhen Morales",
        age: 26,
    },
    {
        name: "Elaiza Mae Sienes",
        age: 16,
    },
    {
        name: "Jeffrey Alarcon",
        age: 19,
    },
];

for (const student of objStudents) {
    ShowStudent(student);
}

function ShowStudent({name, age}) {
    console.log(name);
    console.log(age);
    console.log("********************************\n\n");
}