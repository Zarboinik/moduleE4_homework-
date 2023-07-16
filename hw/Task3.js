const withoutPrototype = function () {
    return Object.create(null);
}

//test
const object = withoutPrototype();
console.log(Object.getPrototypeOf(object));
