function operation (input){
let n1 = Number (input[0]);
let n2 = Number (input[1]);
let simbul = input[2];
let operation =0;
switch(simbul){
case "+": 
operation = n1 + n2;
break;
case "-": 
operation = n1 -n2;
break;
case "*": 
operation = n1 * n2;
break;
case "/": 
operation = n1 / n2;
break;
case "%": 
operation = n1 % n2;
break;

    }if(simbul == "/"){
        
        if( n1 ==0 ){
            console.log(`Cannot divide ${n2} by zero`); 
        }else if(  n2==0){
            console.log(`Cannot divide ${n1} by zero`); 
        } else {
            console.log(`${n1} / ${n2} = ${operation.toFixed(2)}`); 
        }

    } else if(simbul == "%"){
        if( n1 ==0 ){
            console.log(`Cannot divide ${n2} by zero`); 
        }else if(  n2==0){
            console.log(`Cannot divide ${n1} by zero`); 
        } else {
            console.log(`${n1} % ${n2} = ${operation}`); 
        }
    
    }else if(simbul =="+" || simbul =="-"|| simbul =="*" ){
        if(operation % 2 == 0){
            if(simbul =="+" || simbul =="-"|| simbul =="*" ){
                console.log(`${n1} ${simbul} ${n2} = ${operation} - even`);}} 
            else if(!operation % 2 == 0){
                console.log(`${n1} ${simbul} ${n2} = ${operation} - odd`);}
        
    }
    
}
operation (["123","12","/"]);