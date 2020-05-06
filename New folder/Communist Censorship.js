let array = ['Man', 'I','Love','The','Restart','Bootcamp']
let star = ''

for(let i = array[array.length-1].length; i > 0; i-- ) {
        star = star + '*'
    }
    array[array.length-1] = star
    array[array.length-2] = "Turing"
console.log(array)

