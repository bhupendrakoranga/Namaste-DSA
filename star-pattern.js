// Star parttern
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + " * ";
  }
  console.log(row);
}

{
  /*
   Output -
   * * * *
   * * * *
   * * * *
   * * * *
   * * * * 
*/
}

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + " * ";
  }
  console.log(row);
}

{
  /*Output -
   *
   *  *
   *  *  *
   *  *  *  *
   *  *  *  *  *
   */
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < i + 1; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

{
  /*
Output
1
12
123
1234
12345    
*/
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

{
  /*
Output
1
22
333
4444
55555
*/
}
