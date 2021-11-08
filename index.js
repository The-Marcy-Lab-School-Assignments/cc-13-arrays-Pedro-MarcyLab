//write your code here
function averageInArray(numbers) {
    let average = 0;
    for (let i = 0; i < numbers.length; i++) {
        average += numbers[i];
    }
    average = average / numbers.length
    console.log(average)
}
averageInArray([2,2,3,3,0])