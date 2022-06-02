function passworld(input){
   let index=0;
   let name = input[index];
   index++;
   let passworld = input[index];
   index++;
   let data= input[index];
   index++;
   while(data!== passworld){
       data= input[index];
       index++;
       
       break;
   }
   console.log(`Welcome ${name}!`);
   }
//while(true){
   // let data= Number(input[index]);
   //  if(data===passworld){
//break;
// }index++;
//}
//console.log(`Welcome ${name}!`);

//while(index<input.lenght){
   // let data= Number(input[index]);
  // if(data===passworld){
    //   console.log(`Welcome ${name}!`);
//break;
//}index++;

//}
//function passworld(input){
    
   // let name = input[0];
   // let passworld = input[1];
   // let data= input[2];
   // let index=3;
   // while(true){
   //     data= input[index];
    //index++;
    //if(data ===passworld){
     //   console.log(`Welcome ${name}!`); 
     //  break;
   // }
//}
//}

passworld(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);