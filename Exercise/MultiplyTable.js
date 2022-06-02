function miltiplyTable(input) {
    let number = input[0];
    let n3 = Number(number.charAt(0));
    let n2 = Number(number.charAt(1));
    let n1 = Number(number.charAt(2));

    for (let a = 1; a <= n1; a++) {
        for (let b = 1; b <= n2; b++) {
            for (let c = 1; c <= n3; c++) {
                let action= a * b*c;
                console.log(`${a} * ${b} * ${c} = ${action};`);
            }
        }
    }



} miltiplyTable(["222"])