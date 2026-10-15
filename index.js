function createOperation(operator){
    return new Function("a", "b", `return a ${operator} b`);
}

const add = createOperation("+")
const multiply = createOperation("*");

console.log(add(3, 5))
console.log(multiply(3, 5))

// 

function createFunc(number){
    return function(value){
        return number ** value
    }
}

const double = createFunc(3)
const triple = createFunc(5)

console.log(double(2))
console.log(triple(3))


const user = {
    name: "Dharn",
    age: 33,
    role: "Developer"
}

console.log(Reflect.get(user, "name"))
Reflect.set(user, "age", 56)
console.log(Reflect.get(user, "age"))

const proxyUser = new Proxy(user, {
    get(target, property){
        console.log(`Accessing Property ${String(property)}`)
        return target[property]
    }
})

console.log(proxyUser)
console.log(proxyUser.name)
console.log(Object.keys(user)[0])
console.log(Object.keys(user)[1])