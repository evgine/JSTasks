//1.Գրել ծրագիր, որը կհաշվի տրված զանգվածի արժեքների քառակուսիները և կպահի դրանք նոր զանգվածում՝ սորտավորված ձևով։

function solution (arr1) {
    let arr2 = [];
    for(let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]*arr1[i]);
    }
    return arr2.sort(function(x,y) {
        return x - y;
    });
}
let arr1 = [2,1,10,2,9, 3]
console.log(solution(arr1))
