function sleepyTom(input){
let holydays = Number(input[0]);
let workDay = 365 - holydays;
let timeForPlaying = (holydays *127) + (workDay * 63);
let total = 30000 - timeForPlaying;
let hours =  total /60;
if ( timeForPlaying > 30000){
    console.log("Tom will run away");
    console.log(`${hours} hours and {M} minutes more for play`);
} else{
    console.log("Tom sleeps well");
    console.log(`${hours}hours and {M} minutes less for play`);
}
}sleepyTom("20");