//Create a function which accepts the age and tells whether a person is eligible to vote or not.

function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid age.");
  } else if (age < 18) {
    console.log("Not eligible to vote.");
  } else {
    console.log("Eligible to vote.");
  }
}

eligibleToVote(18);
eligibleToVote(20);
eligibleToVote(15);
eligibleToVote(28);
eligibleToVote(-1);

//Output
//Eligible to vote.
//Eligible to vote.
//Not eligible to vote.
//Eligible to vote.
//Invalid age.






//Create a function to check if a number is Even or odd
function isEvenOdd(num) {
  let rem = num % 2; //Check number and divid % 2

  if (rem == 0) {
    //Condition check.
    console.log("Even number.");
  } else {
    console.log("Odd Number.");
  }
}

isEvenOdd(3);
isEvenOdd(10);
isEvenOdd(13);
isEvenOdd(18);
isEvenOdd(30);

//Output
// Odd Number.
// Even number.
// Odd Number.
// Even number.
// Even number.