// Find Second Largest Number in an Array
function findSecondLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [4, 9, 0, 12, 8, 18, 7, 1];
let result = findSecondLargestNumber(arr);
console.log(result); // output: 12
