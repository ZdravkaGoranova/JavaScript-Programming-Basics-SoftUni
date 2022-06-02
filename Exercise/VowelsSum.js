function vowelsSum(input){
let text = input[0];
let sum = 0;
for (let i= 0; i<text.length; i ++){
let character = text.charAt(i);
if(character =="a"){
     sum = sum +1;
}else if(character =="e"){
     sum = sum +2;
}else if(character =="i"){
     sum = sum + 3;
}else if(character =="o"){
     sum = sum + 4;
}else if(character =="u"){
     sum = sum + 5;
}
}
console.log(sum);
}
vowelsSum(["beer"]);