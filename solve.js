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


// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     let average = (classPoints.reduce((a,b) => a + b)) / classPoints.length;
//     if (average < yourPoints) {
//       return true;
//     }
//     return false;
//   }

// function getCount(str) {
//   let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
//   let vowelCount = 0;
  
//   for (let char of str) {
//     if(vowelsArray.some(el => char === el)) {
//       vowelCount += 1;
//     }else {
//       continue;
//     }
//   }
//   return vowelCount;
// }

// function findNeedle(haystack) {
//   // your code here
//   let index = haystack.indexOf('needle')
//   if (index !== -1) {
//     return `found the needle at position ${index}`;
//   }
// }

// DESCRIPTION:
// Input:

// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr
// false otherwise
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

// Note:
// Though not correct in a mathematical sense

// we will consider that there are no rotations of strng == ""
// and for any array arr: contain_all_rots("", arr) --> true


// var FindFunction = function(func, arr) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//     let sortedArray = func.sort((a, b) => a-b)
//     let newFunc = sortedArray[0]
//     console.log(newFunc)
//     return arr.filter(a => newFunc(a))

// let newFunc;
// for (let infunc of func) {
//   if (typeof infunc === "function") {
//     newFunc = infunc
        //break
//   }
// }
// return arr.filter(a => { return newFunc(a)})
// }
// console.log(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]))



// function reOrdering(text){
//   //your code here
//   let newArr = text.split(' ')
//   let upperStr;
//   for (let i = 0; i < newArr.length; i++) {
//     if(isUpperCase(newArr[i])) {
//       upperStr = newArr[i]
//       newArr.splice(newArr.indexOf(upperStr), 1)
//       newArr.unshift(upperStr)
//       break;
//     }
//   }
//   return newArr.join(' ')
// }

// function isUpperCase(str){
//   return str.charAt(0).toUpperCase() === str.charAt(0)
// }

// console.log(reOrdering('ming Yao'))


// function arr2bin(arr){
//   //check if array contains a non-integer and return false
//   //sum all items of array and return binary equivalent
//   if(arr.length === 0) {
//     return '0';
//   }
//   if(arr.some(el => typeof el !== "number")) {
//       return false;
//     }
//   let sum = arr.reduce((a,b) => a+b, 0);
//   return sum.toString(2);
// }

// function capitalize(s){
//   let sArr = s.split('');
//   let even = '';
//   let odd = '';
  
//   // for(let char of sArr) {
//   //   if(sArr.indexOf(char) % 2) {
//   //     even += char.toUpperCase();
//   //     odd += char;
//   //   }else {
//   //       odd += char.toUpperCase();
//   //       even += char;
//   //   };
//   // };
//   // return [even, odd];

//   even = sArr.map((char, index) => index % 2 == 0 ? char.toUpperCase() : char).join('')
//   odd = sArr.map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char).join('')
  
//   return [even, odd]
// }

// console.log(capitalize('abcdef'))
// console.log(capitalize('codewars'))
// console.log(capitalize("codewarriors"))
// console.log(capitalize("abracadabra"))


// function min(arr, toReturn) {
//   // TODO
//   let smallest = Math.min(...arr);
//   let indexOfSmallest = arr.indexOf(smallest);
  
//   return toReturn === 'value' ? smallest : indexOfSmallest;
// }