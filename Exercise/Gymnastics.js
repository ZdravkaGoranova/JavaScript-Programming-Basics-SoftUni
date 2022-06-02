function gymnastic(input) {
    let country = input[0];
    let device = input[1];
    let totalSum = 0;
    let difficult = 0;
    let execution = 0;
    let diff = 0;

    switch (country) {
        case "Russia":
            switch (device) {
                case "ribbon": difficult = 9.100; execution = 9.400; break;
                case "hoop": difficult = 9.300; execution = 9.800; break;
                case "rope": difficult = 9.600; execution = 9.000; break;
                default:
                    break;
            }
            break;
        case "Bulgaria":
            switch (device) {
                case "ribbon": difficult = 9.600; execution = 9.400; break;
                case "hoop": difficult = 9.550; execution = 9.750; break;
                case "rope": difficult = 9.500; execution = 9.400; break;
                default:
                    break;
            }
            break;
        case "Italy":
            switch (device) {
                case "ribbon": difficult = 9.200; execution = 9.500; break;
                case "hoop": difficult = 9.450; execution = 9.350; break;
                case "rope": difficult = 9.700; execution = 9.150; break;
                default:
                    break;
            }
           
            break;
           
        default:
            break;
        
    }
    totalSum = difficult + execution;
    diff = ((20 - totalSum)/20)*100;
    console.log(`The team of ${country} get ${totalSum.toFixed(3)} on ${device}.`);
    console.log(`${diff.toFixed(2)}% `);

} gymnastic(["Bulgaria",
    "ribbon"]);