//Single loop
for(let i = 0; i<5; i++){
    console.log("hello word")
}
// Output 5 time "Hello Word" will be print.



// -------- Double Loop inside code how  to work. ---------//
for(let i = 0 ; i < 3; i++){
    for(let j = 0; j < 3; j++) {
        console.log("i =" + i + " j =" + j);
    }
}
{
  /* output 
i =0 j =0
i =0 j =1
i =0 j =2
i =1 j =0
i =1 j =1
i =1 j =2
i =2 j =0
i =2 j =1
i =2 j =2
*/
}



for(let i = 0; i < 3; i++) {
    for (let j = 0;  j < i; j ++) {
        console.log("i =" + i + " j =" + j);
    }
}
{
  /* output 
i =1 j =0
i =2 j =0
i =2 j =1
*/
}



for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("i =" + i + " j =" + j);
  }
}
{/* Output
i =0 j =0
i =1 j =0
i =1 j =1
i =2 j =0
i =2 j =1
i =2 j =2
i =3 j =0
i =3 j =1
i =3 j =2
i =3 j =3
i =4 j =0
i =4 j =1
i =4 j =2
i =4 j =3
i =4 j =4*/}



for(let i = 0; i < 3;  i++) {
    for(let j = i; j > 0; j--) {
        console.log("i =" + i + " j =" + j);
    }
}
{/* Output
    i =1 j =1
    i =2 j =2
    i =2 j =1  
*/}



for(let i = 0; i < 5; i++) {
  for(let j = i; j >= 0; j--){
        console.log("i =" + i + " j =" + j);
    }
}
{/*
Output
i =0 j =0
i =1 j =1
i =1 j =0
i =2 j =2
i =2 j =1
i =2 j =0
i =3 j =3
i =3 j =2
i =3 j =1
i =3 j =0
i =4 j =4
i =4 j =3
i =4 j =2
i =4 j =1
i =4 j =0    
*/}



for(let i = 5; i > 0; i--) {
  for(let j = 0; j < i; j++){
    console.log("i =" + i + " j =" + j);
  }
}
{/*
Output
i =0 j =0
i =1 j =1
i =1 j =0
i =2 j =2
i =2 j =1
i =2 j =0
i =3 j =3
i =3 j =2
i =3 j =1
i =3 j =0
i =4 j =4
i =4 j =3
i =4 j =2
i =4 j =1
i =4 j =0   
*/}