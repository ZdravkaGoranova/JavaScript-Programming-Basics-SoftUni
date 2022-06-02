function newHous (input){
let fwors =  input[0];
let countFwors=  Number(input[1]);
let budjet = Number(input[2]);
let sum =0;

switch(fwors){
    case "Roses":
        sum = countFwors * 5;
        if(countFwors >80)
        {sum = sum * 0.9;}
        break;
        case "Dahlias":
            sum = countFwors * 3.80;
            if(countFwors >90)
            {sum = sum * 0.85;}
            break;
        case "Tulips":
            sum = countFwors * 2.80;
            if(countFwors > 80)
            {sum = sum * 0.85;}
            break;
        case "Narcissus":
            sum = countFwors * 3;
            if(countFwors <120)
            {sum = sum + sum * 0.15;}
            break;
        case "Gladiolus":
            sum = countFwors * 2.5;
            if(countFwors < 80)
            {sum = sum + sum * 0.20;}
            break;
        default:
        break;   
}
let results = Math.abs(sum- budjet); 
if( budjet >= sum){
    console.log(`Hey, you have a great garden with ${countFwors} ${fwors} and ${results.toFixed(2)} leva left.`);
}else {
    console.log(`Not enough money, you need ${results.toFixed(2)} leva more.`);
}
}
newHous (["Tulips","88","250"]);