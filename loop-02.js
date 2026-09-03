// 1-  Write a function that returns  the number of negative number in an array.
function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let arr = [2, -3, 5, -1, 0, -7, 4];
let result = countNegativeNumbers(arr);
console.log(result); // output: 3

// 2- Write a function that returns the largest number in an array.
function findLargestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr2 = [5, 0, 7, 100, 8, 17, 1];
let result2 = findLargestNumber(arr2);
console.log(result2); // output: 100



// 3-  Write a function that return the smallest number in an array.
function findSmallestNumber(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr3 = [5, 3, 7, 100, 8, 17, 1];
let result3 = findSmallestNumber(arr3);
console.log(result3); // output: 1
