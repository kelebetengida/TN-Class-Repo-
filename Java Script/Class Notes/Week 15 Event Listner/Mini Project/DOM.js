function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


// Create a div container on HTML document Where every number can be appended to the container div.
// Create an input element to accept any given number
// Create a button container on HTML document to dynamically append to the container div.


// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

//Create a function that generates the numbers based on the input filed

// Get the value from the input field with the id 'inputNumber'
    
    // Get the div container with the id 'numberContainer'
    
    // Clear the contents of the number container
    
    
    // Loop from 1 to the inputNumber
        
        // Create a new div element
        
        // Set the text content of the div to the current number (i)
        
        // Add the 'number' class to the div
        
        // Check if the current number is even
            
            // Add the 'even' class to the div
        

        // If the number is not even, it must be odd
            
            // Add the 'odd' class to the div
        
        
        // Check if the current number is prime
            
            // Add the 'prime' class to the div
        
        // Append the div to the number container
    








////////////////////////////////////////////Challenge//////////////////////////////////
//If you can come up with your own strategy to solve your code that is challenging enough 