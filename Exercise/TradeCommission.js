function tradeCommission (input){
let city = input[0];
let money = Number (input[1]);
let commission = 0;
switch(city){
case"Sofia":
if ( money <0){
    console.log("error");
}
else if (money<=500 && money >=0){
    commission = money * 0.05;
}else if(money <=1000){
    commission = money * 0.07;
}else if(money <=10000){
    commission = money * 0.08;
}else if(money >10000){
    commission = money * 0.12;
}
break;
case"Varna":
if ( money <0){
    console.log("error");
} else if (money<=500 && money >=0){
    commission = money * 0.045;
}else if(money <=1000){
    commission = money * 0.075;
}else if(money <=10000){
    commission = money * 0.10;
}else if(money >10000){
    commission = money * 0.13;
}
break;
case "Plovdiv":
    if ( money <0){
        console.log("error");
    }
    else if (money<=500 && money >=0){
        commission = money * 0.055;
    }else if(money <=1000){
        commission = money * 0.08;
    }else if(money <=10000){
        commission = money * 0.12;
    }else if(money >10000){
        commission = money * 0.145;
    }
break;
default:
    console.log("error");
    break;
   
} if (!commission==0){
console.log(commission.toFixed(2));}
else {
    console.log();
}
    
}tradeCommission (["uhuji","-499.99"]);