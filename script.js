// 1.Get the HTML element with the selector
const dynamicText = document.querySelector("h1 span");

// 2.An array of words to display
const words = [
    ". . . !",
    "❤️ Love!",
    "A Way Of Life !",
    "Like Art . . . !",
    "Everything !",
];

// 3.Variables to track the position and deletion status of the word

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// 4.Function to simulate typing effect

const typeEffect = () => {
    // Get the current word from array

    const currentWord = words[wordIndex];

    // Get the substring of the current word from the start to the current character position

    const currentChar = currentWord.substring(0, charIndex);

    // Set the text content of the HTML element to the current characters

    dynamicText.textContent = currentChar;

    // check if not deleting and still typing characters

    if (!isDeleting && charIndex < currentWord.length) {
        // if the condition is true , type the next character
        charIndex++;

        // call the function after a certain delay

        setTimeout(typeEffect, 200);
    }
    // check if deleting and still have character to delete
    else if (isDeleting && charIndex > 0) {
        // if the condition is true , remove the previous character
        charIndex--;

        // Call the function after a cartain deley

        setTimeout(typeEffect, 100);
    } else {
        // if the word is complately deleted, switch to the next word
        isDeleting = !isDeleting;

        // Remove the CSS class to stop the blinking effect
        dynamicText.classList.remove("stop-blinking");

        // Calculate the index of the next word in the array

        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

        // call the function after a certain delay to start typing the next word
        setTimeout(typeEffect, 1200);
    }
}

// 5.call the function to start the typing effect 

typeEffect();