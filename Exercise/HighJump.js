function jump(input) {
    let purpose = Number(input[0]);
    let index = 0;
    let command = Number(input[index++]);
    let counter = 0;
    let felt = 0;
    let start = purpose - 30;

    while (index < input.length) {
        let currentJump = Number(input[index++]);
        counter++;
        if (currentJump > start) {
            if (currentJump > purpose) {
                console.log(`Tihomir succeeded, he jumped over ${start}cm after ${counter} jumps.`);
                break;
            }
            start += 5;
            felt = 0;
        } else if (currentJump <= purpose) {
            felt ++;
        }
        if (felt === 3) {
            console.log(`Tihomir failed at ${start}cm after ${counter} jumps.`);
            break;
        }
        
    } 
} 
jump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"
    
]);