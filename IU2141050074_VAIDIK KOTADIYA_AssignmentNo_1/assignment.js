// 1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.

function isAnagram(str1, str2) {

    let x = str1.toLowerCase().split('').sort().join('');
    let y = str2.toLowerCase().split('').sort().join('');
    return x === y;

}


// 2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter and returns a list of objects where each object is unique category-wise and has total price spent as its value.

function calculateTotalSpentByCategory(transactions) {

    let categoryFound;
    let output = [];
    for (let i = 0; i < transactions.length; i++) {
        categoryFound = false;
        for (let j = 0; j < output.length; j++) {
            if (transactions[i]["category"] === output[j]["category"]) {
                output[j]["totalSpent"] += transactions[i]["price"];
                categoryFound = true;
                break;
            }
        }
        if (!categoryFound) {
            output.push({
                category: transactions[i]["category"],
                totalSpent: transactions[i]["price"]
            });
        }
    }
    return output;
}


// 3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.

function findLargestElement(numbers) {

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= max) {
            max = numbers[i];
        }
    }
    return max;
}


// 4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.

function isPalindrome(str) {

    let x = str.toLowerCase();
    let y = str.toLowerCase().split('').reverse().join('');
    return x === y;

}


// 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.

function calculateTime(n) {

    let start_time = performance.now();
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    let end_time = performance.now();
    let taken_time = (end_time - start_time) / 1000;
    return taken_time;

}


// 6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.

function countVowels(str) {

    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


// 7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.

function sumArray(numbers) {

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}


// 8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {

    let evenNumbers = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}


// 9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.

function findSmallestElement(numbers) {

    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] <= min) {
            min = numbers[i];
        }
    }
    return min;
}


// 10: Create a function `reverseString` that takes a string and returns the string reversed.

function reverseString(str) {

    return str.split('').reverse().join('');
}


// 11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.

function fibonacci(n) {

    let fibonacci = [];
    if (n <= 0) return fibonacci;
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}


// 12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.

function removeDuplicates(arr) {

    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}


// 13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.

function countOccurrences(str, char) {
    return str.split(char).length - 1;
}


// 14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.

function findCommonElements(arr1, arr2) {

    let same = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                same.push(arr1[i]);
            }
        }
    }
    return same;
}


// 15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.

function sortStrings(arr) {

    return arr.slice().sort((a, b) => a.localeCompare(b));
}
