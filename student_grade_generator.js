//this first part is to make sure the console.log statement is visible in the terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//the function below is to give a scope of the approved marks that the user should input; the input does not include negative values
function markslimit (marks){
    if (marks>=0 && marks <=100){
        return studentgrade(marks);
    }
    else{
        return "Invalid Number";
    }
}
//the following iff statements give the grades according to the marks input by the user
function studentgrade(marks){
    if(marks > 79){
        return "A";
    }
    else if(marks>=60 && marks<=79){
        return "B";
    }
    else if(marks>=50 && marks<=59){
        return "C";
    }
    else if(marks>=40 && marks<=49){
        return "D"; 
    }
    else{
        return "E"; 
    }
}
rl.question('Please enter your marks: ', (marks) => {
    console.log(`Your grade is ${markslimit(marks)} `);//this is what the user will see when their grade is being displayed
    rl.close();
  });
