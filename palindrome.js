// prompt user to enter a word
let userInputWord = prompt(`Please enter a word`);

// make all letters be lowercase
let lowerCaseWord = userInputWord.toLowerCase();

let reverseWord = ``;

// outputs index length of input
let i = lowerCaseWord.length - 1;

// iterates through each charcter of word from end to start
while (i >= 0) {
    // append current letter to the reversed word
    reverseWord += lowerCaseWord[i];
    // Move to next letter on left
    i--;
}

// lets user know is word is/isn't a palindrome
if (reverseWord == lowerCaseWord) {
    // triggers if value is true
    console.log(`${userInputWord} is a palindrome`);
} else {
    // triggers if value is false
    console.log(`${userInputWord} is not a palindome`);
}