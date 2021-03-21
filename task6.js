let arr = [1, 2, 3, 3];
let answer = 'Одинаковые';

for (let i=0; i<arr.length-1 ; i++) {
    if (arr[i]!==arr[i+1]) {
        answer = 'Неодинаковые';
        break;
    }
}
console.log(answer);