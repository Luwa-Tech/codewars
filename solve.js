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

function friend(friends){
    //your code here
    return friends.filter(name => name.length === 4)
  }

  console.log(friend(["Ryan", "Kieran", "Mark"]))