// const findAverage = (array) => {
//   // your code here
// if ( array.length > 0 ) {
//     let sum = array.reduce((cur, next) => {
//         return cur + next;
//     })
//     return sum / array.length;
// } else {
//     return 0;
// }
// };

// console.log(findAverage([1,1,1]));

// console.log(findAverage([1,2,3]));

// console.log(findAverage([1,2,3,4]));

// console.log(findAverage([1,2,3,4]));

// const bmi = (weight, height) => {
//     let BMI = weight / (height * height);

//     if (BMI <= 18.5) {
//       return "Underweight";
//     } else if (BMI <= 25.0) {
//       return "Normal";
//     } else if (BMI <= 30.0) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     };
//   };

//   console.log(bmi(80, 1.80));

//   console.log(bmi(80, 1.80));

// const friend = (friends) => {
//     return friends.filter(name => name.length === 4);
//   };

//   console.log(friend(["Ryan", "Kieran", "Mark"]));

// const removeExclamationMarks = (s) => {
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
//   };

// console.log(removeExclamationMarks("Hello World!"));

//fakeBin('45385593107843568'), '01011110001100111');

//(fakeBin('509321967506747'), '101000111101101'); 

// const fakeBin = (stringDigits) => {
//     // return stringDigits.split('').map(char => {
//     //     return parseInt(char) < 5 ? "0" : "1"
//     // }).join('');

// const digits = (stringDigits) => {
//     let result = '';
//     for (let digit of stringDigits) {
//         if ( parseInt(digit) < 5 ) {
//             result += '0';
//         } else {
//             result += '1';
//         }
//     }
//     return result;
// }

// console.log(fakeBin("366058562030849490134388085"));

// const rearrange = (nonInteger) => {
//     //convert integer to string
//     //turn integer into an array of characters(split)
//     //sort in descending order
//     //join array of integer and then convert to number
//     //then return result
//     return parseInt(nonInteger.toString().split('').sort((a, b) => b-a).join(''))
// }

// console.log(rearrange(123456789));

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     //sort array in an ascending order
//     //get the first integer from array
//     //return result
//     let sortedArray = args.sort((a,b) => a-b);
//     return sortedArray[0];
//   }
// }

// let test = new SmallestIntegerFinder();
// console.log(test.findSmallestInt([78,56,232,12,8]));

// const abbrevName = (name) => {
//     let nameArr = name.split(' ');
//     let abbrev = `${nameArr[0][0]}.${nameArr[1][0]}`
//     return abbrev.toUpperCase();
// }

// console.log(abbrevName("Sam Harris"));

// const grow = (x) => {
//     return x.reduce((cur, next) => cur * next);
//   }

// const minMax = (arr) => {
//     let min = Math.min(...arr);
//     let max = Math.min(...arr);
//     return [min, max];
// }

// const betterThanAverage = ( classPoints, yourPoints ) => {
//     
//     let average = (classPoints.reduce((a,b) => a + b)) / classPoints.length;
//     if (average < yourPoints) {
//       return true;
//     }
//     return false;
//   }

// const getCount = (str) => {
//   let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
//   let vowelCount = 0;
  
//   for (let char of str) {
//     if(vowelsArray.some(el => char === el)) {
//       vowelCount += 1;
//     } else {
//       continue;
//     }
//   }
//   return vowelCount;
// }

// const findNeedle = (haystack) => {
//   let index = haystack.indexOf('needle');
//   if (index !== -1) {
//     return `found the needle at position ${index}`;
//   }
// };

// const FindFunction = (func, arr) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//     let sortedArray = func.sort((a, b) => a-b);
//     let newFunc = sortedArray[0];
//     return arr.filter(a => newFunc(a))

// let newFunc
// for (let infunc of func) {
//   if (typeof infunc === "function") {
//     newFunc = infunc;
//   }
// }
// return arr.filter(a => { return newFunc(a)});
// }
// console.log(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]));

// const reOrdering = (text) => {
//   let newArr = text.split(' ');
//   let upperStr;
//   for (let i = 0; i < newArr.length; i++) {
//     if(isUpperCase(newArr[i])) {
//       upperStr = newArr[i];
//       newArr.splice(newArr.indexOf(upperStr), 1);
//       newArr.unshift(upperStr)
//       break;
//     }
//   }
//   return newArr.join(' ');
// }

// const isUpperCase = (str) => {
//   return str.charAt(0).toUpperCase() === str.charAt(0);
// }

// console.log(reOrdering('ming Yao'));

// const arr2bin = (arr) => {
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

// const capitalize = (s) => {
//   let sArr = s.split('');
//   let even = '';
//   let odd = '';
  
//   // for (let char of sArr) {
//   //   if (sArr.indexOf(char) % 2) {
//   //     even += char.toUpperCase();
//   //     odd += char;
//   //   } else {
//   //       odd += char.toUpperCase();
//   //       even += char;
//   //   };
//   // };
//   // return [even, odd];

//   even = sArr.map((char, index) => index % 2 == 0 ? char.toUpperCase() : char).join('')
//   odd = sArr.map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char).join('')
  
//   return [even, odd];
// }

// console.log(capitalize('abcdef'));

// const min = (arr, toReturn) => {
//   let smallest = Math.min(...arr);
//   let indexOfSmallest = arr.indexOf(smallest);
//   return toReturn === 'value' ? smallest : indexOfSmallest;
// }

// const nbYear = (p0, percent, aug, p) => {
//         let percentIncrease = percent / 100;
//         let numberOfYears = 1;
//         let result;
        
//         do {
//           result = Math.floor(p0 + p0 * percentIncrease + aug);
          
//           if (result >= p) {
//             return numberOfYears;
//           } else {
//             p0 = result;
//             numberOfYears++;
//           }
//         } while (result < p)
//         return false;
// }

// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// const smallEnough = (a, limit) => {
//   return a.every(i => i <= limit);
// }

// const solution = (str, ending) => {
//   if (ending === "") {
//     return true;
//   }
  
//   if (!str.includes(ending)) {
//     return false;
//   }
  
//   const arg1LastChar = str.charAt(str.length - 1);
//   const arg2LastChar = ending.charAt(ending.length - 1);
  
//   if (arg1LastChar === arg2LastChar) {
//     return true;
//   } else {
//     return false;
//   }
// }