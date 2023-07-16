const myProperties = function (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} - ${obj[key]}`);
        }
    }
}

//test
const person = {
    city: "Moscow"
}

const student = Object.create(person);

student.ownCity = "Kemerovo";
student.ownName = "Sergey";
student.ownAge = 18;

myProperties(student)
