function avereg(input) {

    let n = Number(input[0]);
    let index = 1;
    let text = input[index++];
    let sum = 0;
    let counter = 0;
    let aver = 0;
    let i = 0;
  //   for (i = text; i >=text; i++) {

   while (text >= 0) {
        sum += Number(text);
        counter++;
        text = input[index++];
    }
    aver = (sum / counter).toFixed(2);
    console.log(aver);

} avereg(["2",
    "6",
    "4",
]);