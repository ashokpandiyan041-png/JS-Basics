
//1) Even or Odd

// const check = (num) => {
//     if(num%2 === 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }
// console.log(check(0));
// console.log(check(7));
// console.log(check(4));


//2) Result Evaluator — Pass or Fail

// function evaluvateresult(mark){
//     if(mark<0 || mark>100){
//         console.log("-----invalid marks!!!-----");
//         return null;
        
//     }

//     if(mark>=50){
//         return "pass";
        
//     }
//     else{
//         return "fail";
        
//     }
//  }

// console.log(evaluvateresult(75));
// console.log(evaluvateresult(45));
// console.log(evaluvateresult(115));



//3) Maximum Finder — Largest of Three Numbers

// const findmax=(num1,num2,num3) => {
//     if(num1>=num2 && num1>=num3){
//         return num1;
//     }
//     else if(num2>=num1 && num2>=num3){
//         return num2; 
//     }
//     else{
//         return num3;
//     }
// }

// console.log(findmax(10,25,15));
// console.log(findmax(12,55,27));
// console.log(findmax(7,7,3));


//4) Accumulator — Sum from 1 to N


// function sumToN(n){
//     let sum=0;
//     for(let i=1; i<=n; i++){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(sumToN(5));
// console.log(sumToN(10));

//5) Multiplication Table Generator

// function printtable(num){
//     for(let i=1;i<=10;i++){
//         console.log(num + "x" + i + "=" +(num*i));
        
//     }
// }
// printtable(3);


//6) Digit Counter — Number Length Finder

// function countdigits(num){
//     let count=0;
//     while(num>0){
//         count++;
//         num=Math.floor(num/10);


//     }
//     return count;
// }
// console.log(countdigits(1234));
// console.log(countdigits(1));
// console.log(countdigits(123.4));
// console.log(countdigits(10000));

//7) Number Reverser

// function reverseNumber(num){
//     let reverse=0;
//     while(num>0){
//         let digit = num % 10;
//         reverse = reverse * 10 + digit;
//          num=Math.floor(num/10);
        

//     }
//     return reverse;
// }
// console.log(reverseNumber(1234));
// console.log(reverseNumber(5000));
// console.log(reverseNumber(23));


// 8) Factorial Engine

// function factorial(n){
//     let result=1;
//     for(let i=1;i<=n;i++){
//         result=result*i;
//     }
//     return result;
// }
// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(1));

//9) Prime Validator

// function isprime(num){
//     if(num<2){
//         return false;
//     }
    
//     for(let i=2;i<num;i++){
//         if(num%2===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isprime(2));
// console.log(isprime(15));
// console.log(isprime(0));


//10) Pattern Builder — Star Triangle

// function printPattern(n){
//     for( let i=1;i<=n;i++){
//         let star= "";
//         for(let j=1;j<=i;j++){
//             star=star + "*";
//         }
//         console.log(star);
        

//     }
// }
// printPattern(4);

