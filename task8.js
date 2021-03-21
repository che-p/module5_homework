let map = new Map([
    [1,"раз"],    
    ["2","два"],    
    [true,"три"],    
    ['key3',4],    
    [2,5]
]);

for (let count of map) {
    console.log(`Ключ — ${count[0]}, значение — ${count[1]}`);
}