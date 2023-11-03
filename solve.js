function findAverage(array) {
  // your code here
if (array.length > 0) {
    let sum = array.reduce((cur, next) => {
        return cur + next
    })
    return sum / array.length
}else {
    return 0;
}
}

console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))