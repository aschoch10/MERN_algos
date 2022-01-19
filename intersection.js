/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

// 🐸
/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */

function orderedIntersection(sortedA, sortedB) {
    //setting empty array to push common values to
    const resultsArray = []
    //counters to keep track of the indexes
    let counterA = 0
    let counterB = 0
    //terminates after checking all the common elements in at least one of the arrays, because if it's not in one array we don't care if it's in the other or not
    while (counterA < sortedA.length && counterB < sortedB.length) {
        //if the two values are equal we know they are intersecting 
        if (sortedA[counterA] == sortedB[counterB]) {
            //check to see if it's already in the resultsArray that we created
            if (resultsArray[resultsArray.length - 1] != sortedA[counterA]) {
                // console.log (resultsArray[resultsArray.length - 1])
                // console.log(sortedA[counterA]);
                // and if it's not in the array then we simply add it in 
                resultsArray.push(sortedB[counterB])
            }
            //bc they're both equal we increment them both
            counterA++
            counterB++
        }
        //if a < b increment a because we can assume they are sorted so we make one bigger until they are they same or larger
        else if (sortedA[counterA] < sortedB[counterB]) {
            counterA++
            //the opposite of 56
        } else {
            counterB++
        }
    }
    return resultsArray
}

console.log(orderedIntersection(arrA1, arrB1));
console.log(orderedIntersection(arrA2, arrB2));
console.log(orderedIntersection(arrA3, arrB3));