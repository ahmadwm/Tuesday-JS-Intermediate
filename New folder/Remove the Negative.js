let array = [1, -2, 4, 1]
let positive = []
for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] >= 0) {
        positive.push(array[i])
    }
}
console.log(positive)

