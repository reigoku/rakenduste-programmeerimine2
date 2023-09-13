/*let numberslist = [8, 7, 6, 5, 4, 3, 2]

function findRandom(numbers){

    return numbers.indexOf(Math.random(0, 6))
}

console.log(findRandom([8, 7, 6, 5, 4, 3, 2]))
function addNumbers(numbers, index1, index2){

    return numbers.indexOf(index1) + numbers.indexOf(index2)
}
console.log(addNumbers(([8, 7, 6, 5, 4, 3, 2]) (3) (5)))

const arrowFunction = (n1, n2) => {
    return n1 + n2
}
wack ass code */ 
const arrowFunction2 = (num1, num2) => num1 + num2

function addNumbers2(num1, num2, num3){
    return function addNumbersHelper(num2, num3){
        return function epicEmbedFail(num3){
            return num1+num2+num3
        }
    }
}
console.log(addNumbers2(3)(4)(5))

const arrowAddNum = (num1) => (num2) => num1 + num2

console.log(arrowAddNum(4)(7))

const arrowAddName = (nameReal) => `name is ${nameReal}`
const real = "reigo"
const name = 'name is ${real}'

console.log(arrowAddName("reigo"))

const numberArray = [1, 2, 3, 4, 5]
const newArray = numberArray.map((n) => n+5) //newArray = (6, 7, 8, 9, 10)

const filteredArray = numberArray.filter()