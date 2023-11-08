// function findAverage(array) {
//   // your code here
// if (array.length > 0) {
//     let sum = array.reduce((cur, next) => {
//         return cur + next
//     })
//     return sum / array.length
// }else {
//     return 0;
// }
// }

// console.log(findAverage([1,1,1]))
// console.log(findAverage([1,2,3]))
// console.log(findAverage([1,2,3,4]))

// function bmi(weight, height) {
//     let BMI = weight / (height*height)
//     if (BMI <= 18.5) {
//       return "Underweight"
//     }else if (BMI <= 25.0) {
//       return "Normal"
//     }else if (BMI <= 30.0) {
//       return "Overweight"
//     }else {
//       return "Obese"
//     }
//   }

//   console.log(bmi(80, 1.80))

// function friend(friends){
//     //your code here
//     return friends.filter(name => name.length === 4)
//   }

//   console.log(friend(["Ryan", "Kieran", "Mark"]))

// function removeExclamationMarks(s) {
//     //loop through given string
//     //add any character that is not an exclamation mark to a new variable
//     //return new variable with updated string
//     let updatedString = ''
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "!") {
//           continue;
//       }else {
//         updatedString += s[i];
//       }
//     }
//     return updatedString;
//   }

//   console.log(removeExclamationMarks("Hello World!"))

//Given a string of digits, you should replace any digit below 5 //with '0' and any digit 5 and above with '1'. Return the resulting string.

//fakeBin('45385593107843568'), '01011110001100111');
//(fakeBin('509321967506747'), '101000111101101'); 
//(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

// const fakeBin = (stringDigits) => {
//     // return stringDigits.split('').map(char => {
//     //     return parseInt(char) < 5 ? "0" : "1"
//     // }).join('')

//     let result = ''
//     for (let digit of stringDigits) {
//         if (parseInt(digit) < 5) {
//             result += '0';
//         }else {
//             result += '1';
//         }
//     }
//     return result;
// }

// console.log(fakeBin('45385593107843568'))
// console.log(fakeBin('509321967506747'))
// console.log(fakeBin('366058562030849490134388085'))

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// const rearrange = (nonInteger) => {
//     //convert integer to string
//     //turn integer into an array of characters(split)
//     //sort in descending order
//     //join array of integer and then convert to number
//     //then return result
//     return parseInt(nonInteger.toString().split('').sort((a, b) => b-a).join(''))
// }
// //when sort() compares two values, it seends the values to the
// //compe function, accorrding to the returned (negative, zero, positive value)
// console.log(rearrange(123456789))


// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     //sort array in an ascending order
//     //get the first integer from array
//     //return result
//     let sortedArray = args.sort((a,b) => a-b)
//     return sortedArray[0]
//   }
// }

// let test = new SmallestIntegerFinder()
// console.log(test.findSmallestInt([78,56,232,12,8]))
// console.log(test.findSmallestInt([78,56,232,412,228]))
// console.log(test.findSmallestInt([34, -345, -1, 100]))

// const abbrevName = (name) => {
//     let nameArr = name.split(' ');
//     let abbrev = `${nameArr[0][0]}.${nameArr[1][0]}`
//     return abbrev.toUpperCase()
// }

// console.log(abbrevName("Sam Harris"))

// function grow(x){
//     return x.reduce((cur, next) => cur * next);
//   }

// function minMax(arr){
//     let min = Math.min(...arr);
//     let max = Math.min(...arr);

//     return [min, max];
// }
