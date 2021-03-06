/*          __                        __         
/\ \                      /\ \        
_ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
\ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot Games in 2021.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//            v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// step 1:
//frequencyMap = {}
// step 2:
// extract [keys? values? something?]
// if it's an array -> sort
// ["b70", "a84", "c42"]

// step 3:
// return a string

// hints:
// parseInt(str)
// isNaN(x)
// myObj.hasOwnProperty("key")

function rehash(str) {
    let frequencyMap = {}
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]) ) {
            console.log(str[i]);
            if (frequencyMap.hasOwnProperty(str[i])) {
                frequencyMap[str[i]] += str[i]

            } else {
                frequencyMap[str[i]] = str[i]
            }
        } 
    }console.log(frequencyMap);
}

rehash(str1);
console.log(rehash(str1) === expected1, "<-- should be \"true\"");