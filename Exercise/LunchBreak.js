function lunchBreak(input){
let name = input[0];
let timeFilm = Number(input[1]);
let timeBreak = Number(input[2]);

let timeEtting = (0.125* timeBreak).toFixed(2);
let timeSlep =  (0.25 * timeBreak).toFixed(2); 
let restTime = timeBreak - timeEtting - timeSlep;
if(restTime >= timeFilm){
    console.log(`You have enough time to watch ${name} and left with ${Math.ceil(restTime -timeFilm)} minutes free time.`);
}else{
    console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeFilm - restTime)} more minutes.`);
}

}lunchBreak(["Teen Wolf","48","60"]);