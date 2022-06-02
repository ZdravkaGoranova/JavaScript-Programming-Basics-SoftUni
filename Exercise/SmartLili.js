    function smartLili(input){
    let age = Number (input[0]);        
    let priceLaundry = Number(input[1]);
    let priceToy = Number(input[2]);
    let money= 0;
    let toyCurrentMoney= 10;
    let toyCounter =0;
    for( let i= 1; i<= age; i++){
    if(i % 2==0){
        money += toyCurrentMoney;
        toyCurrentMoney += 10; 
        money --;
    }else{
        toyCounter++;
    }
    }
    money+= toyCounter *priceToy;
    let diff= Math.abs(money-priceLaundry);
    if(money >= priceLaundry){
    
        console.log(`Yes! ${diff.toFixed(2)}`);
    }else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
    }
smartLili(["21","1570.98","3"]);