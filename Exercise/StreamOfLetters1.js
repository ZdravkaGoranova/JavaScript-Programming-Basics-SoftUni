function letter(input) {
    let index = 0;
    let command = input[index++];
    let letters = "";
    let conunterN = 0;
    let conunterO = 0;
    let conunterC = 0;
    while (command !== "End") {
        let text = command;


        if (text === "c" || text === "o" || text === "n") {
            if (text === "c") {
                conunterC++;
            } else if (text === "o") {
                conunterO++;
            } else if (text === "n") {
                conunterN++;
            }
            if (conunterC >= 1 && conunterO >= 1 && conunterN >= 1) {
                letters += "" + " ";
                conunterC = 0;
                conunterN = 0;
                conunterO = 0;
            }
            else if (conunterC > 1 || conunterO > 1 || conunterN > 1) {
                letters += "" + text;
            }
        } else if (text !== "c" || text !== "o" || text !== "n") {
            letters += "" + text;
        } if (text != "a" || text != "b" || text != "c" || text != "d" || text != "e" || text != "f" || text != "g" || text != "h" || text != "i" || text != "j" || text != "k" || text != "l" || text != "m" || text != "n" || text != "o" || text != "p" || text != "q" || text != "r" || text != "s" || text != "t" || text != "u" || text != "v" || text != "w" || text != "x" || text != "y" || text != "z") {
            letters += "";
        }

        command = input[index++];
    }
    console.log(letters);
} letter(["o",
    "S",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"]);