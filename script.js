// simple calc logic

// let a=10;
// let b=0;

// let operator="";

// if(operator==="+"){
//     console.log(a+b);
    
// }
// else if(operator==="-"){
//     console.log(a-b);
    
// }
// else if(operator==="*"){
//     console.log(a*b);
    
// }
// else if(operator==="/"){
//     if(b===0){
//         console.log("b is zero");
        
//     }
//     else{
//      console.log(a/b);   
//     }
    
// }
// else if(operator==="%"){
//     console.log(a%b);
    
// }

// else{
//     console.log("invalid operator");
    
// }




//student grade analysis

let mark=35;
let bonus=5;

mark+=bonus;

let grade;
if(mark>=90 && mark<=100){
    grade="A";
}
else if(mark>=70){
    grade="B";
}
else if(mark>=50){
    grade="C";
}
else {
    grade="F";
}

let result =mark>=50 ? "pass" : "fail";

let remark;

switch(grade){
    case "A":
        remark="**Excellent**";
        break;
    case "B":
        remark="*Good*";
        break;
    case "C":
        remark="Average";
        break;
     case "F":
        remark="Need Improvement";
        break;
    default:
        remark="INVALID GRADE";
        break;
           
}


console.log("MARK=>",mark);
console.log("GRADE=>",grade);
console.log("RESULT=>",result);
console.log("REMARKS=>",remark);

if(mark>=90 && result=="pass"){
    console.log("---High Mark With Bonus!---");
    
}