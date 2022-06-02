function oscars(input){
    let index= 0;
let nameActor= input[index];
index++;
let points = Number(input[index]);
index++;
let countJury = Number( input[index]);
index++;
let isNominee= false;
 for (let i =0 ; i< countJury; i++){
    let nameJury= input[index];
    index++;
    let pointsJury = Number(input[index]);
    index++;

    let curentPoints = (nameJury.length * pointsJury)/2;
    points += curentPoints;

 if(points > 1205.5){
    isNominee= true;
     console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
     break;
 }
 }if (!isNominee){
    let diff= Math.abs(points - 1250.5);
    console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
 }

}oscars(["Zahari Baharov","205","4", "Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);