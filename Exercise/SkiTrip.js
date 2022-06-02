function skiTrip(input){
    let day = Number (input[0]);
    let romm = input[1];
    let evaluation = input[2];
    let night= day -1;
    let priceForRomm =0;
    
    switch(romm){
        case"room for one person":
        priceForRomm = 18 *night;
        break;
        case"apartment":
        if( night<10){
            priceForRomm =(25  * night) * 0.70;
        } else if(night>=10 && night<= 15){
            priceForRomm =( 25  * night) * 0.65;
        }else if(night>15){
            priceForRomm =(25  * night) * 0.5;
        }
        break;
        case"president apartment":
        if( night<10){
            priceForRomm =(35  * night) * 0.90;
        } else if(night>=10 && night<= 15){
            priceForRomm =( 35  * night) * 0.85;
        }else if(night>15){
            priceForRomm =(35  * night) * 0.80;
        }
        break;
    }
    if (evaluation=== "positive"){
        console.log(((priceForRomm * 0.25)+priceForRomm).toFixed(2));
    } else{
        console.log((priceForRomm-(priceForRomm * 0.10)).toFixed(2));  
    }

}skiTrip(["2","apartment",
 "positive"]);