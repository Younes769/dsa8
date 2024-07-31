function evenArr() {
    let evenNum = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        evenNum.push(numbers[i]);
      }
    }
    return evenNum;
}
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = evenArr(numbers);
console.log(evenNumbers);