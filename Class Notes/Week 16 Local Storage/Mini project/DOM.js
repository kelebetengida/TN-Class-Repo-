
///////////////////////////////////Attention!/////////////////////////////////////
//..........................This is one way of achiving the task.................. 
//..........................you have been assigned but not the o..................
//..........................nly way of doing it.Please challenge..................
//..........................yourself to come up with your own wa..................
//..........................y to solve this mini project.       ..................
//////////////////////////////////////////////////////////////////////////////////


//    Select the player form element by its ID and store it in a variable called playerForm.
//    Select the leaderboard element by its ID and store it in a variable called leaderboard.
//    Add an event listener to the playerForm for the 'submit' event.
//    Inside the submit event listener callback function:
//       Prevent the default form submission behavior using event.preventDefault().
//       Call the addPlayer() function to handle adding a new player.
//    Define the addPlayer() function:
//       Retrieve the input values for first name, last name, country, and score from the form inputs.
//       Create a new card element using document.createElement('div') and add the 'card' class to it.
//       Set the innerHTML of the card element to include the player's name, country, score, and buttons.
//       Append the card element to the leaderboard.
//       Select the buttons within the card for adding score, subtracting score, and deleting the player.
//       Add event listeners to each button:
//           - Add an event listener to the 'Add 5 Points' button that calls updateScore() with 5 as an argument.
//           - Add an event listener to the 'Subtract 5 Points' button that calls updateScore() with -5 as an argument.
//           - Add an event listener to the 'Delete' button that removes the card element from the leaderboard.
//       Define the updateScore() function:
//            Retrieve the current score value from the card's DOM.
//            Parse the current score value to an integer.
//            Update the current score value by adding or subtracting the specified points.
//            Update the displayed score value in the DOM with the new score value.
  