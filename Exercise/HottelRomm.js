function hotelRom(input){
let mount = input[0];
let night = Number(input[1]);
let priceApartament = 0;
let priceStudio = 0;

switch(mount){
case "May":
case "October":
   priceApartament = night * 65;
   priceStudio =  night * 50;

   if(night >7 && night <14){
    priceStudio =  priceStudio * 0.95;
} else if(night>14){
    priceStudio =  priceStudio * 0.70;
    priceApartament=   priceApartament* 0.90;
}
break;
case "June":
case "September":
    priceApartament =  night * 68.7;
    priceStudio =  night * 75.2;
    if(night>14){
        priceStudio =  priceStudio * 0.80;
        priceApartament=   priceApartament* 0.90;
    }
  
break;

case "July":
case "August":
    priceApartament = night * 77;
    priceStudio = night * 76;
   
    if(night>14){
        priceApartament=   priceApartament* 0.90;
    }

break;
 }

console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRom(["June","14"]);