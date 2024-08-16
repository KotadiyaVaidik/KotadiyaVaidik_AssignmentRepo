
date : 2/8/2024

Assignment Level : Hard  for me

Code Quality Is Maintained 



This document provides instructions for running the provided t functions, outlines any assumptions made, and includes sample inputs and expected outputs for each function.
Instructions for Running the Code
1.	Environment Setup:
o	Ensure you have a t runtime environment installed. You can use Node.js or any browser's developer console.
2.	Create a File:
o	Copy the provided t code into a file named functions.js.
3.	Run the Code:
o	Node.js:
	Open a terminal or command prompt.
	Navigate to the directory containing functions.js.
	Run the code using node functions.js.
o	Browser:
	Open the browser's developer console (usually accessible via F12 or right-click > Inspect > Console).
	Paste the code into the console and press Enter.
Functions Description, Assumptions, Sample Inputs, and Expected Outputs
1. isAnagram
Description: Checks if two strings are anagrams of each other.
Assumptions:
•	Both input strings are case-insensitive.
Sample Input:
isAnagram('CAT', 'Act');
Expected Output:
true
Sample Input:
isAnagram('Akshar', 'Ratanpara');
Expected Output:
false
2. calculateTotalSpentByCategory
Description: Calculates total spending per category from a list of transactions.
Assumptions:
•	Each transaction object has a category and price property.
•	Transactions are not sorted.
Sample Input:
 
const transactions = [
    { category: 'Food', price: 20 },
    { category: 'Food', price: 15 },
    { category: 'Entertainment', price: 50 },
    { category: 'Food', price: 30 },
    { category: 'Entertainment', price: 10 }
];
calculateTotalSpentByCategory(transactions);
Expected Output:
[
    { category: 'Food', totalSpent: 65 },
    { category: 'Entertainment', totalSpent: 60 }
]
3. findLargestElement
Description: Finds the largest element in an array of numbers.
Assumptions:
•	The array contains at least one number.
Sample Input:
findLargestElement([1, 2, 3, 4, 5]); 
Expected Output:
5
4. isPalindrome
Description: Checks if a string is a palindrome.
Assumptions:
•	The string is case-insensitive.
Sample Input:
isPalindrome('Asa');
Expected Output:
true 

5. calculateTime
Description: Calculates the time (in seconds) to sum numbers from 1 to n.
Assumptions:
•	n is a positive integer.
Sample Input:
calculateTime(10); 
Expected Output: 
<time_in_seconds> // Actual time may vary
6. countVowels
Description: Counts the number of vowels in a string.
Assumptions:
•	The string can contain both uppercase and lowercase letters.
Sample Input:
countVowels('Akshar');
Expected Output:
2
7. sumArray
Description: Calculates the sum of all numbers in an array.
Assumptions:
•	The array contains numeric values.
Sample Input:
sumArray([1, 2, 3, 4, 5]);
Expected Output:
15
8. filterEvenNumbers
Description: Filters out even numbers from an array.
Assumptions:
•	The array contains numeric values.
Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5]);
Expected Output:
[2, 4]
9. findSmallestElement
Description: Finds the smallest element in an array of numbers.
Assumptions:
•	The array contains at least one number.
Sample Input:
findSmallestElement([10, 2, 3, 4, 5]);
Expected Output:
2
10. reverseString
Description: Reverses a string.
Sample Input:
reverseString('Akshar');
Expected Output:
'rahskA'
11. fibonacci
Description: Generates the first n Fibonacci numbers.
Assumptions:
•	n is a positive integer.
Sample Input:
fibonacci(6);
Expected Output:
[0, 1, 1, 2, 3, 5]
12. removeDuplicates
Description: Removes duplicate values from an array.
Assumptions:
•	The array may contain duplicates.
Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
Expected Output:
[1, 2, 3, 4, 5]
13. countOccurrences
Description: Counts the occurrences of a character in a string.
Assumptions:
•	The character to count is provided.
Sample Input:
countOccurrences('Akshar', 'a');
Expected Output:
2
14. findCommonElements
Description: Finds common elements between two arrays.
Assumptions:
•	Both arrays are non-empty.
Sample Input:
findCommonElements([1, 2, 3, 4, 5], [1, 2, 3, 5, 6, 7]);
Expected Output: 
[1, 2, 3, 5]
15. sortStrings
Description: Sorts an array of strings alphabetically.
Sample Input:
sortStrings(["banana", "apple", "cherry", "date"]);
Expected Output:
["apple", "banana", "cherry", "date"]

