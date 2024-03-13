function firstChar(text) {
  // your code here
	 if (text.trim() === '') { // Check if the string contains only spaces
        return '';
    }
    for (let char of text) {
        if (char !== ' ') { // Check for the first non-space character
            return char;
        }
    }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
