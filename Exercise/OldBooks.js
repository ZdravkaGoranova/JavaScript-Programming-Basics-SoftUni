function oldBooks(input){
    let index= 1;
    let searchBook= input[0];
   
    let nextBooks = input[index];
    index++;
    let countBook= 0;

while(nextBooks!=="No More Books"){
if(searchBook=== nextBooks){
    }
countBook++;
nextBooks = input[index];
index++;
}
if(searchBook !== nextBooks){
    console.log(`The book you search is not here!`);
    console.log(`You checked ${countBook} books.`);
}else {
    console.log(`You checked ${countBook} books and found it.`);  
}
}
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);