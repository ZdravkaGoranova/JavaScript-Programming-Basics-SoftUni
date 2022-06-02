function vacationBookList( input){
let countPages = Number(input[0]);
let pagesForOnehoure = Number(input[1]);
let countOfDays = Number(input[2]);
let timeForReading = countPages/pagesForOnehoure;
let needHoures = timeForReading/countOfDays;
console.log(needHoures);
}
vacationBookList( ["432", "15", "4"]);