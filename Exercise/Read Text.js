function readText(input){
let index=0;
let text = input[index];
index++;

while(text !=="Stop"){
    console.log(text);
    text = input[index];
    index++;

    //while(true){
    //let text = input[index];
   // index++;
    //if(text ==="Stop"){
   //     break;
   // }
   // cinsole.log(text);
    //}
} 

}
readText((["Nakov",
    "SoftUni",
   "Sofia",
    "Bulgaria",
    "SomeText",
   "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]));