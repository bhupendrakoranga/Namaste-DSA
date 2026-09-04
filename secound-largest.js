// Find Secound Largest Number in an Array
function findSecoundLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secoundLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secoundLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secoundLargest && arr[i] != firstLargest) {
      secoundLargest = arr[i];
    }
  }
  return secoundLargest;
}

let arr = [4, 9, 0, 12, 8, 18, 7, 1];
let result = findSecoundLargestNumber(arr);
console.log(result); // output: 12
