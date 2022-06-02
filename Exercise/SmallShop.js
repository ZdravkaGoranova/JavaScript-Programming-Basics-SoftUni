function smallShop(input){
let product = input[0];
let city = input[1];
let count = Number (input[2]);
let price = 0;

switch(product){
case "coffee":
if (city == "Sofia"){
    price = count * 0.5 ;
} else if(city =="Plovdiv"){
    price = count * 0.4;
}else if(city =="Varna"){
    price = count * 0.45;
}
    break;
case "water":
    if (city== "Sofia"){
        price = count * 0.80;
    } else if(city =="Plovdiv"){
        price = count * 0.70;
    }else if(city =="Varna"){
        price = count * 0.70;
    }
    break;
case "beer":
    if (city == "Sofia"){
        price = count * 1.20;
    } else if(city =="Plovdiv"){
        price = count * 1.15;  
    }else if(city =="Varna"){
        price = count * 1.10;  
    }
    break;
case "sweets":
    if (city == "Sofia"){
        price = count * 1.45;
    } else if(city =="Plovdiv"){
        price = count * 1.30; 
    }else if(city =="Varna"){
        price = count * 1.35;
    }
    break;
case "peanuts":
    if (city == "Sofia"){
        price = count * 1.60; 
    } else if(city =="Plovdiv"){
        price = count * 1.50;
    }else if(city =="Varna"){
        price = count * 1.55;
    }
break;
}console.log(price);
}smallShop(["beer","Sofia","2"]);