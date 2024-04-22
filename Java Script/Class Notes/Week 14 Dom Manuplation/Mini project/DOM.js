// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.



// Even numbers background is green



// Odd numbers background is yellow



// Prime numbers background is red


 // Function to check if a number is prime
 // Function to check if a number is prime
 function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Function to generate numbers and apply background color
function generateNumbers() {        let container = document.querySelector('.container');

    for (let i = 1; i <= 100; i++) {
        let numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numberDiv.classList.add('number');
        if (i % 2 === 0) {
            numberDiv.style.backgroundColor = 'green'; // Even numbers background is green
        } else if (isPrime(i)) {
            numberDiv.style.backgroundColor = 'red'; // Prime numbers background is red
        } else {
            numberDiv.style.backgroundColor = 'yellow'; // Odd numbers background is yellow
        }
        container.appendChild(numberDiv);
    }
}

// Call the function to generate numbers
generateNumbers();
