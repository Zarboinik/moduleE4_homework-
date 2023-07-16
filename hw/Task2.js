const checkProperty = function (str, obj) {
    let check = false;
    for (let key in obj) {
        if (key === str) {
            check = true;
        }
    }
    return check;
}

//test
const student = {
    name: "Sergey",
    city: "Kemerovo",
    age: 18,
}

const testTrue = "name";
const testFalse = "sdfsdg";

console.log(checkProperty(testTrue, student));
console.log(checkProperty(testFalse, student));
