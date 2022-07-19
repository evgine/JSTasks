//1.Գրել ծրագիր, որը կհաշվի տրված զանգվածի արժեքների քառակուսիները և կպահի դրանք նոր զանգվածում՝ սորտավորված ձևով։

let arr1 = [2, 1, 10, 2, 9, 3];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * arr1[i]);
};
arr2 = arr2.sort(function (x, y) {
    return x - y;
});

console.log(arr2);

//2.Հաշվել տրված թվի թվանշանների գումարը։ Օրինակ, տրված է 4637, վերադարձնել 4+6+3+7։

//short sol.
let number = 1234;
let sum = 0;

while (number) {
    sum += number % 10;
    number = Math.floor(number / 10)
};
console.log(sum);

//the solution that came to my mind first
function solution(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    };
    return sum;
};
let num = 12234;
let Arr = String(num).split("").map((num) => {
    return Number(num);
})
console.log(solution(Arr));


//3.Հաշվել տրված թվի թվանշանների արտադրյալի և գումարի տարբերությունը։ Օրինակ, տրված է 4637, վերադարձնել (4*6*3*7) - (4+6+3+7)։

let number = 1234;
let sum = 0;
let mult = 1;

while (number) {
    sum += number % 10;
    mult *= number % 10;
    number = Math.floor(number / 10)
};

let sol = mult - sum;
console.log(sol);

//4.Գրել ֆունկցիա, որը ստանում է միջակայքի սկիզբը և վերջը (երկու թվեր) և հաշվում միջակայքում գտնվող կենտ թվերի քանակը։ 
//Օրինակ, 3 և 7 միջակայքում կա երեք կենտ թիվ (3, 5, 7)։

function solution(start, end) {
    let count = 0; 
    let range = new Array(end - start + 1).fill().map((x, i) => i + start);
    for (let i = 0; i < range.length; i++) {
        if ((range[i] % 2) !== 0) {
            count += 1;
        }
    }
    return count;
}
console.log(solution(3, 7))

//5.1, 2, 3, 5, 8, 13, 21, 34, 55, 89 Ֆիբոնաչիի առաջին տասը թվերն են։ Գրել ծրագիր, որը հաշվում է Ֆիբոնաչիի թվերի զույգ արժեքների գումարը։ 
//Դիտարկել միայն այն թվերը, որոնց արժեքը չի գերազանցում 4 միլիոնը։ Ստուգել պատասխանը այստեղ.
//the solution that came to my mind first
const fib = (num) =>
    Array.from({ length: num }).reduce(
        (acc, value, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
    );
let numbers = fib(34);      //որ չգերազանցի 4միլիոնը
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
        sum += numbers[i]
    }
}
console.log(sum)

//6. Build an Array With Stack Operations

let target = [1, 2];
let n = 4;

var buildArray = function (target, n) {
    let sol = [];
    let j = 0;
    for (let i = 1; i <= n; i++) {
        if (j == target.length) {
            return sol;
        }
        else if (target[j] == i) {
            sol.push("Push");
            j++;
        }
        else {
            sol.push("Push");
            sol.push("Pop");
        }
    }
    return sol;
};
console.log(buildArray(target, n));


//7. Intersection of Two Arrays

let nums1 = [1,2,3,4,5,5,5,6,6,6];
let nums2 = [1,2,3,4,5,6]

var intersection = function (nums1, nums2) {
    let sol = [];
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
  
    for (let item of nums1Set) {
      if (nums2Set.has(item)) {
        sol.push(item);
      };
    };
    return sol;
  };

console.log(intersection(nums1, nums2));


//9. Sort Array By Parity

let nums = [3, 1, 2, 0, 7, 41, 22, 22, 24];

var sortArrayByParity = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            if (i != j) {
                [nums[j], nums[i]] = [nums[i], nums[j]];
            }
            j++;
        }
    }
    return nums;
};

console.log(sortArrayByParity(nums));


//10. Sum of Unique Elements

let nums = [1,1,1,1,1]

var sumOfUnique = function (nums) {
    let sum = 0;
    let obj = {};

    for (let item of nums) {
        if (obj[item] === undefined) {
            sum += item;
            obj[item] = 1;
        } else if (obj[item] === 1) {
            sum -= item;
            obj[item] = -1;
        };
    };
    return sum;
};

console.log(sumOfUnique(nums));


//11. Implement strStr()

let haystack = "aaaa";
let needle = "aa";

var strStr = function (haystack, needle) {
    let arr = haystack.split(needle);

    if ((!haystack.includes(needle))) {
        return -1;
    };
    if ((haystack == "") || (needle == "") || (haystack == needle) || (arr.length == 1)) {
        return 0;
    };
    let newStr = arr[0].split('');
    return newStr.length;
};

console.log(strStr(haystack, needle));


//12.Length of Last Word

let s = "This is an alien world";
function filterr (s){
    return s.length >= 1;
};   

var lengthOfLastWord = function(s) {
    let splitedStr = s.split(" ");
    let filteredStr = splitedStr.filter(filterr);
    let lastWord = filteredStr[filteredStr.length - 1];
    return lastWord.length;
};

console.log(lengthOfLastWord(s));


//13. Valid Palindrome

let s = 'HELLO kolleh   ';
let replacedStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

var isPalindrome = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length- 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(replacedStr));


//14.Unique email adresses
let emails = ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"];

var numUniqueEmails = function (emails) {
    let mappedArr = emails.map((elem) =>
                             `${elem.split('@')[0].replace(/\+.*$|\./g, '')}@${elem.split('@')[1]}`
                            );
    let emailsArr = new Set(mappedArr);
    return emailsArr.size;

};

console.log(numUniqueEmails(emails));

//15. Find First and Last Position of Element in Sorted Array

let nums = [5,7,7,8,8,10,21,21];
let target = 8;

var searchRange = function (nums, target) {
    let firstIndex = nums.indexOf(target);
    if(firstIndex === -1) {
        return [-1, -1];
    }
    for (let i = firstIndex; i < nums.length; i++) {
        if(nums[i] > target) {
            return [firstIndex, i - 1];
        }
    }
    return [firstIndex, nums.length - 1];
};

console.log(searchRange(nums, target));








