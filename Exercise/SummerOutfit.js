function SummerOutfit(input){
let text =input[1];
let gardus = Number(input[0]);
let Outfit ="";
let Shoes ="";

switch(text){
case"Morning": 
if(gardus<=18 && gardus>=10){
     Outfit = "Sweatshirt";
    Shoes = "Sneakers";
}else if(gardus<=24 && gardus>18){
    Outfit ="Shirt" ;
   Shoes ="Moccasins" ;
}else if(gardus>= 25 ){
    Outfit ="T-Shirt" ;
   Shoes ="Sandals" ;
}
break;
case"Afternoon":
if(gardus<=18 && gardus>=10){
    Outfit = "Shirt";
   Shoes = "Moccasins";
}else if(gardus<=24 && gardus>18){
   Outfit ="T-Shirt" ;
  Shoes ="Sandals" ;
}else if(gardus>= 25 ){
   Outfit ="Swim Suit" ;
  Shoes ="Barefoot" ;
}
 break;
case"Evening":
if(gardus<=18 && gardus>=10){
    Outfit = "Shirt";
   Shoes = "Moccasins";
}else if(gardus<=24 && gardus>18){
    Outfit = "Shirt";
    Shoes = "Moccasins";
}else if(gardus>= 25 ){
    Outfit = "Shirt";
    Shoes = "Moccasins";
}

}
console.log(`It's ${gardus} degrees, get your ${Outfit} and ${Shoes}.`);
}
SummerOutfit(["16","Morning"]);