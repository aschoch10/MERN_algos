// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    //   { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    const resultArr = [];
    //const searchItem = Object.keys(searchObj);
    //console.log("searchitem"+searchItem);
    for (item of items) {
        let addItem = true;
        for (search in searchObj) {
            if (!item.hasOwnProperty(search)) {
                addItem = false;
                break;

            }
            if (item[search] != searchObj[search]) {
                addItem = false;
                break;
            }

        }
        if (addItem) {
            resultArr.push(item);
        }

    }
    return resultArr;
}


console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor1, items).toString() == output1.toString());
console.log(findObjectsFilter(searchFor2, items));


