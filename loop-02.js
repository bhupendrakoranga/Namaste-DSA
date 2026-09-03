// Write a function that returns  the number of negative number in an array.

function countNegativeNumbers(arr)  {
    let count = 0;
    for (let i =0; i < arr.length; i++) {
        if(arr[i] < 0) {
            count = count + 1;
        }
    }
    return count;

}

let arr =  [2, -3, 5, -1, 0, -7, 4];
let result = countNegativeNumbers(arr);
console.log(result);