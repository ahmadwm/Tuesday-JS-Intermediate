let x = 0
for (let i = 200; i <= 2700; i++) {
    if ((i % 3 === 0 || i % 5 === 0)&& !(i%3 ===0 && i%5===0)) {
        x+= i
    }
}
console.log(x)