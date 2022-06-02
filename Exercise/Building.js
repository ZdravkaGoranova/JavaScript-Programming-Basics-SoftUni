function building(input){
    let floor = Number (input[0]);
    let room =Number(input[1]);
    
    for (let i= floor; i>= 1; i--){
        let text="";
        for (let j= 0; j< room; j++){
    
    if(i === floor && (i%2==0 ||i % 2 !==0)){
        text = text + `L${i}${j} `;
    }        
    else if(i%2===0){
        text = text + `O${i}${j} `;
           
    }else if(i % 2 !==0){
        text = text +`A${i}${j} `;
            } 
          }
          console.log(text);
        }
    
    }building(["1","5"]);