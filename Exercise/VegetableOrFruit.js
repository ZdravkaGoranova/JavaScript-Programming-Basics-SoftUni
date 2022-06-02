function vegetableOrFruit(input){
switch(input[0]){
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "grapes":
        case "lemon": 

        console.log("fruit");
        break;
    case "tomato":
    case "cucumber":
    case "pepper":
    case "carrot":
        console.log("vegetable");
        break;
        default:
            console.log("unknown");
            break;
}
} vegetableOrFruit(["pepper"]);