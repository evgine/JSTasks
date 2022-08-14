function reverse(str) {
    let arr = [];
    let result = '';
    for (let i of str) {
        arr.push(i.codePointAt());
    }
    for(let i = arr.length - 1; i >= 0; i--){
        result += String.fromCodePoint(arr[i]);
    }
    return result;
}

OR

function reverse(str) {
    let arr = [];
    for (const i of str) {
        arr.push(elem)
    }
    return arr.reverse().join('');
}
