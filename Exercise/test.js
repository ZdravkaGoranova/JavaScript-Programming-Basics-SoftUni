function transportPrice2(input){
    let n = Number(input[0]);
    let time = input[1];
    let price = 0;
 
    switch(time){
        case "day":
            if(time == "day" && n <= 20){
                price = 0.7 + (n * 0.79);
                console.log(price.toFixed(2));
            } else if (time == "day" && n > 20 && n <= 100){
                price = n * 0.09;
                console.log(price.toFixed(2));
            } else if (time == "day" && n > 100){
                price = n * 0.06;
                console.log(price.toFixed(2));
                
            }break;
        case "night":
            if (time == "night" && n <= 20){
                price = 0.7 + (n * 0.9);
                console.log(price.toFixed(2));
 
            } else if (time == "night" && n > 20 && n <= 100){
                price = n * 0.09;
                console.log(price.toFixed(2));
            } else if (time == "night" && n > 100){
                price = n * 0.06;
                console.log(price.toFixed(2));
                
            }break;
 
    }
 
}transportPrice2(["5","day"])