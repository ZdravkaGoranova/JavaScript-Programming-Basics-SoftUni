function invalidNumber(input){
let number = Number (input[0]);
let  isValid = (number ==0 )|| (number >= 100 && number <=200);   
if (!isValid){
    console.log("invalid");
}
}
invalidNumber(["200"]);