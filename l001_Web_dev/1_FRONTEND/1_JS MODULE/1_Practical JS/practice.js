for(let i = 1; i < 21; i++) {
    if(i % 3 == 0)
        console.log(i , " Fize");
    else if(i % 5 == 0)
        console.log(i , " Buzz");
    else if(i % 3 == 0 && i % 5 == 0)
        console.log(i, " FizzBuzz");
    else
        console.log(i);
}