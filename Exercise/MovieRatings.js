function movieRating(input) {

    let countMovie = Number(input[0]);
    let index = 1;
    let averRaiting = 0;
    let totalAverR = 0;

    let MaxRaiting = Number.MIN_SAFE_INTEGER;
    let MaxFilm = "";
    let MinFilm = "";
    let MinRaiting = Number.MAX_SAFE_INTEGER;

    while (countMovie > 0) {
        //1.while (true) {
        //2.while(index> input.length)
        //3. for (let index = 1; index <=countMovie *2; i+=2) {
         if (index >= countMovie * 2) {
           break;
          }
          let nameFilm = input[index++];
          let raiting = Number(input[index++]);

        if (raiting > MaxRaiting) {
            MaxRaiting = raiting;
            MaxFilm = nameFilm;
        } if (raiting <= MinRaiting) {
            MinRaiting = raiting;
            MinFilm = nameFilm;
        }
        averRaiting += raiting;
        
    }
    totalAverR = averRaiting / countMovie;
    console.log(`${MaxFilm} is with highest rating: ${MaxRaiting.toFixed(1)}`);
    console.log(`${MinFilm} is with lowest rating: ${MinRaiting.toFixed(1)}`);
    console.log(`Average rating: ${totalAverR.toFixed(1)}`);

} movieRating([
    "5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"
]);