var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {
    sortedArray = [];
    while(arr1.length>0){
        if(arr2.length == 0){
            sortedArray.push(...arr1);
            console.log(sortedArray);
            return sortedArray;
        }
        else if(arr1[0]<arr2[0]){
            sortedArray.push(arr1.shift())
            console.log(arr1);
            console.log(sortedArray);
        }
        else{
            sortedArray.push(arr2.shift())
            console.log(arr2);
            console.log(sortedArray);
        }
    }
    sortedArray.push(...arr2);
    console.log(sortedArray);
    return sortedArray;
}

mergeSortedArrays(mergeArr2,mergeArr1);
mergeSortedArrays(mergeArr1,mergeArr2);