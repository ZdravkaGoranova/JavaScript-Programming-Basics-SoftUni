function inchesToCentimeter (input){
    let inchen = Number( input[0]);
    let a = 2.54;
    let  centimeter = inchen * a;
    console.log(centimeter);
}
inchesToCentimeter (["7"]);