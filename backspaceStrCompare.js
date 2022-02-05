/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 

    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/


// aclp
// ad#clp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//             v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
    //create new array 
    let arrayS = []
    let arrayT = []
    //iterate through the string 
    let i = 0
    while (i < S.length || i < T.length) {
        // console.log("S"+ S[i])
        // console.log("T"+ T[i])
        if (S[i] !== "#") {
            //if value@ i is char, push to array 
            arrayS.push(S[i])
        }
        else if (S[i] === "#") {
            arrayS.pop()
        }
        if (T[i] !== "#") {
            //if value is not # push to array T
            arrayT.push(T[i])
        }
        else if (T[i] === "#") {
            //if value@i is #, pop from created array 
            arrayT.pop()
        }
        i++
    }
    //compare lengths of arrays if !=, dont need to compare anymore
    if (arrayS.length !== arrayT.length) {
        return false;
    }
    else {
        //else...would have to be able to compare them...compare strings?
        if (arrayS.toString() === arrayT.toString()) {
            return true;
        }
        else {
            return false
        }

    }
    // console.log("arrayS", arrayS)
    // console.log("arrayT", arrayT)
}

console.log(backspaceStringCompare(S1, T1))