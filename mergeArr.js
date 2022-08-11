function merge(arr1, arr2, arr3, arr4, arr5) {
    
    let arr = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5];
    let arrMap = new Map();
    let newArr = [];
    
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        arrMap.set(i, 0);
    }
    for (let itemArr of arr) {
        arrMap.forEach(function (value, key) {
            if (itemArr === key) {
                arrMap.set(key, value + 1);
            }
        })
    }
    arrMap.forEach(function (value, key) {
        for (let i = 1; i <= value; i++) {
            newArr.push(key);
        }
    })
    return newArr;
}
