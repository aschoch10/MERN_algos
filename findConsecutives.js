// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) { 
    //for readability 
    let targetNumber = k
    let arrayOfArrays = []
    //for loop to keep track of index
    for (i=0; i<arr.length; i++){
        let sumOfNums = 0  
        let tempArray = []
        //innner loop to traverse through the array
        for (j=i; j<arr.length; j++){
            //add consectutive target values until we reach the number or the end of the array
            //if yes then we need to add it to the array of arrays
            sumOfNums += arr[j] 
            tempArray.push(arr[j])
            console.log("Sum of nums is: " + sumOfNums);
            console.log("Temp array is: " + tempArray);
            if (sumOfNums == targetNumber){
                arrayOfArrays.push(tempArray)
                tempArray = []
            } 
        }
    } 
    return arrayOfArrays;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));