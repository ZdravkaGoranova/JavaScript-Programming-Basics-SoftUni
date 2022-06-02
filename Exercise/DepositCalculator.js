function calculator(input)
{
let deposit = Number(input[0]);
let term = Number (input[1]);
let interestRate = Number(input[2])/100;
let sumTerm = deposit * interestRate;
let TermForMont =  sumTerm/12;
let sum = deposit + (term * TermForMont);
    console.log(sum);
}
calculator(["2350 ", "6", "7"]);