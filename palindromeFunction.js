const checkPalindrome = (word) => {
    /*split() method splits the word it into an array,
    reverse() method reverses the order of the array,
    join() method takes the reversed array and turns it to a string*/

    let newWord = word.split("").reverse().join("");

    // checks if argument passed into the function equals the reversed form

    if (word === newWord){
        return true;
    } else {
        return false;
    }
}

checkPalindrome("madam");


