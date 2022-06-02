function trainthe(input) {
    let index = 0;
    let people = Number(input[index++]);
    let command = input[index++];
    let totalSumGrade = 0;
    let cointerName = 0;

    while (command !== "Finish") {
        let name = command;
        cointerName++;
        let tempSumGrade = 0;
        for (let i = 0; i < people; i++) {
            let grade = Number(input[index]);
            index++;
            tempSumGrade += grade;
        }
        let averTempGrade = tempSumGrade / people;
        console.log(`${name} - ${averTempGrade.toFixed(2)}.`);
        totalSumGrade +=averTempGrade;
        command = input[index++];
    }
    let avr =totalSumGrade /cointerName;
    console.log(`Student's final assessment is ${avr.toFixed(2)}.`);

}trainthe(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);