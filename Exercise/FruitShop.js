function test(input){
    let fruit = input[0];
    let day = input[1];
    let count =Number (input[2]);
    let sum =0;
     if (day ==="Monday"|| day ==="Tuesday" || day ==="Wednesday"||day ==="Thursday"||day ==="Friday"){
    switch(fruit){
    case "banana": sum = count * 2.50;break;
        case "apple":sum = count * 1.20;break;
            case "orange":sum = count * 0.85;break;
                case "grapefruit":sum = count * 1.45;break;
                    case "kiwi":sum = count * 2.70;break;
                        case"pineapple":sum = count * 5.50;break;
                        case"grapes":sum = count * 3.85;break;
                        default:
                            console.log("error");
                            break;
    } if(!sum == 0){
        console.log(sum.toFixed(2));
    }else {
        console.log();
    }
     }else if(day ==="Saturday"|| day ==="Sunday"){
        switch(fruit){
            case "banana": sum = count * 2.70;break;
                case "apple":sum = count * 1.25;break;
                    case "orange":sum = count * 0.90;break;
                        case "grapefruit":sum = count * 1.60;break;
                            case "kiwi":sum = count * 3.00;break;
                                case"pineapple":sum = count * 5.60;break;
                                case"grapes":sum = count * 4.20;break;
                                default:
                            console.log("error");
                            break;
            }if(!sum == 0){
                console.log(sum.toFixed(2));
            }else {
                console.log();
            }
     } else {
         console.log("error");
     }
    }test((["tomato","Wednesday","1.600"]));