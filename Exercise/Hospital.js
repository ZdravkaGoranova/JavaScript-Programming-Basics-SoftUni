function hospital(input) {
    let day = Number(input[0]);
    let index = 1;
    let countPatient = Number(input[index++]);
    let previewedPatient = 0;
    let NotReviewedPatient = 0;
    let sumNot = 0;
    let sumPre = 0;
    let counterDay = 0;

    for (let i = 1; i <= day; i++) {
        counterDay++;
        if (counterDay % 3 === 0) {
            if (sumNot > sumPre) {
                if (countPatient >=8) {
                    sumPre += 8;
                    NotReviewedPatient = countPatient - 8;
                    sumNot += NotReviewedPatient;
                } else if (countPatient < 8) {
                    sumPre += countPatient;
                    NotReviewedPatient = 0;
                    sumNot += NotReviewedPatient;
                }
            }else {
                previewedPatient = countPatient;
                sumPre += previewedPatient;
                sumNot += 0;
            }
        } else {
            if (countPatient > 7) {
                NotReviewedPatient = countPatient - 7;
                sumNot += NotReviewedPatient;
                previewedPatient+=7;
                sumPre += 7;
            } else {
                previewedPatient = countPatient;
                sumPre += previewedPatient;
                sumNot += 0;
            }
        }
        countPatient = Number(input[index++]);
    }
    console.log(`Treated patients: ${sumPre}.`);
    console.log(`Untreated patients: ${sumNot}.`);
}
hospital(["6",
    "25",
    "25",
    "25","25","25","2"
]);