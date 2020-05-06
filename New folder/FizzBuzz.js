let array = []
for(let i = 0 ; i< 135; i++) {
    if(i % 3 == 0) {
        array[i] = "Fizz"
    }
    else if (i % 5 == 0 ) {
        array[i] = "Buzz"
    }
    else if (i % 15 == 0) {
        array[i] = "FizzBuzz"
    }
    else {
       array[i] = i
    }
}
console.log(array)
