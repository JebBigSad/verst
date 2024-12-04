console.log('задача 1')
console.log(' ')

const concatenateStrings = (str, str1) =>{
    return(str + str1).replace(' ', '')
}


console.log(concatenateStrings('aa','bb'))
console.log(concatenateStrings('aa  ',' '))
console.log(concatenateStrings('',  'bb'))

console.log('задача 2')
console.log(' ')

const getStringLength = (str) => {
    return(str.length)
}

console.log(getStringLength('hello'))

console.log('задача 3')
console.log(' ')

const getStringFromTemplate = (firstName, lastName) =>{
    return(`${'Hello,'} ${firstName} ${lastName}`)
}

console.log(getStringFromTemplate('John','Doe'))
console.log(getStringFromTemplate('Chuck','Norris'))

console.log('задача 4')
console.log(' ')

const getChar = (str, i) => str[i-1] 

console.log(getChar('John Doe', 1))
console.log(getChar('cat', 3 ))


console.log('задача 5')
console.log(' ')

const removeFirstOccurrences = (str, i) => {
    return(str.replace(i, ''))
}


console.log(removeFirstOccurrences('To be or not to be', 'not'))
console.log(removeFirstOccurrences('I like legends', 'end'))
console.log(removeFirstOccurrences('ABABAB','BA'))

console.log('задача 6')
console.log(' ')

const  getRectangleString = (whith, hight) => {
    let i = 1;
    let count = '*'.repeat(whith) + '\n';
    while (i < hight - 1){
        count += '*' + ' '.repeat(whith - 2) + '*\n';
        i += 1;
    }
    count += '*'.repeat(whith);
    return count;
}

console.log(getRectangleString(5,4))

console.log('задача 1.1')
console.log(' ')

const getPloshad = (one, two) => one * two

console.log(getPloshad(5,10))
console.log(getPloshad(5,5))
 
console.log('задача 1.2')
console.log(' ')

const getRadiusPloshad = (num) => 2 * 3.14 * num 

console.log(getRadiusPloshad(5))
console.log(getRadiusPloshad(3.14))
console.log(getRadiusPloshad(0))

console.log('задача 1.3')
console.log(' ')

const getMediumNum = (value1, value2) => (value1 + value2) / 2
console.log(getMediumNum(5,5))
console.log(getMediumNum(10,0))
console.log(getMediumNum(-3,3))


console.log('задача 1.4')
console.log(' ')

const DekardNumb = (num1, num2, num3, num4) => ((num3 - num1) ** 2 + (num4 - num2) ** 2) ** 0.5
console.log(DekardNumb(-5,0, 10,-10))

console.log('задача 1.5')
console.log(' ')

const getKoren = (a, b) => (b/a)
console.log(getKoren(5, 10))
console.log(getKoren(8, -8))
console.log(getKoren(5, 0))

console.log('задача 1.7')
console.log(' ')

const getLastNum = (num) => num % 10
console.log(getLastNum(100))
console.log(getLastNum(37))
console.log(getLastNum(5))


console.log('задача 1.8')
console.log(' ')

const StrNum = (str) => Number(str)

console.log(StrNum(100))
console.log(StrNum(37))
console.log(StrNum(-525.5))


console.log('задача 1.9')
console.log(' ')

const getLengthParalel = (a ,b, c) => ((a ** 2 + b ** 2 + c ** 2) ** 0.5)

console.log(getLengthParalel(1,1,1))
console.log(getLengthParalel(3,3,3))
console.log(getLengthParalel(1,2,3))


console.log('задача 2.0')
console.log(' ')


const roundToPower = (num, pow) => Math.round(num / Math.pow(10, pow)) * Math.pow(10,pow)

console.log(roundToPower(1234, 0))
console.log(roundToPower(1234567, 4))
console.log(roundToPower(1234, 2))


console.log('задача 2.1')
console.log(' ')


const getJustNumber = (num) =>{
    if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
        }
    return true;
}

console.log(getJustNumber(4))
console.log(getJustNumber(5))
console.log(getJustNumber(6))


console.log('задача 2.2')
console.log(' ')

const toNumber = (value, defValue) => isNaN(Number(value)) ? defValue : Number(value);

console.log(toNumber(null, 0));
console.log(toNumber('test', 0));
console.log(toNumber('1', 0));
