    function accountBalance(input){
    let index= 0
    let deposit = input[index];
    index++;
    let totalMoney =0;
    
            while(deposit!=="NoMoreMoney"){
                let number =Number (deposit);
                if(deposit <0){
                    console.log("Invalid operation!");
                    break;
                }
                totalMoney +=number;
                console.log(`Increase: ${number.toFixed(2)}`);
                deposit= input[index];
                index++;
            
        
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
    }
accountBalance(["120","45.55","-150"]);