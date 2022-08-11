// function merge(arr1, arr2, arr3, arr4, arr5) {
    
//     let arr = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5];
//     let arrMap = new Map();
//     let newArr = [];
    
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//         arrMap.set(i, 0);
//     }
//     for (let itemArr of arr) {
//         arrMap.forEach(function (value, key) {
//             if (itemArr === key) {
//                 arrMap.set(key, value + 1);
//             }
//         })
//     }
//     arrMap.forEach(function (value, key) {
//         for (let i = 1; i <= value; i++) {
//             newArr.push(key);
//         }
//     })
//     return newArr;
// }

function merge(arr1, arr2, arr3, arr4, arr5) {
    let arr = [arr1[0], arr2[0], arr3[0], arr4[0], arr5[0]];
    let longest = arr1.length + arr2.length + arr3.length + arr4.length + arr5.length;
    let newArr = [];

    let indexOfOne = 0, indexOfTwo = 0, indexOfThree = 0, indexOfFour = 0, indexOfFive = 0;

    for (let i = 0; i < longest; i++) {
        newArr.push(Math.min(...arr));
        if (Math.min(...arr) === arr[0]) {
            arr[0] = arr1[indexOfOne + 1];
            indexOfOne++;
            if (arr1[indexOfOne] == undefined) {
                arr[0] = Infinity;
            }
        }
        else if (Math.min(...arr) === arr[1]) {
            arr[1] = arr2[indexOfTwo + 1];
            indexOfTwo++;
            if (arr2[indexOfTwo] == undefined) {
                arr[1] = Infinity;
            }
        }
        else if (Math.min(...arr) === arr[2]) {
            arr[2] = arr3[indexOfThree + 1];
            indexOfThree++;
            if (arr3[indexOfThree] == undefined) {
                arr[2] = Infinity;
            }
        }
        else if (Math.min(...arr) === arr[3]) {
            arr[3] = arr4[indexOfFour + 1];
            indexOfFour++;
            if (arr4[indexOfFour] == undefined) {
                arr[3] = Infinity;
            }
        }
        else if (Math.min(...arr) === arr[4]) {
            arr[4] = arr5[indexOfFive + 1];
            indexOfFive++;
            if (arr5[indexOfFive] == undefined) {
                arr[4] = Infinity;
            }
        }
    }
    return newArr;
}
