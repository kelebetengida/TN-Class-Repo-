
# Leaderboard
This is a simple web application for creating a leaderboard where you can add players with their names, country, and score. Each player card includes buttons to add or subtract 5 points and a delete button.

Instructions
To use this leaderboard application, follow these steps:

Clone or download this repository to your local machine.
Open the index.html file in your web browser.
HTML
The HTML file (index.html) contains the structure of the leaderboard. It includes input fields for the player's first name, last name, country, and score, as well as a button to add a player. The player cards are displayed within a <div> element with the ID leaderboard.

CSS
The CSS file (styles.css) contains the styles for the leaderboard interface, including the layout, input fields, buttons, and player cards.

JavaScript
The JavaScript file (script.js) handles the functionality of the leaderboard. It listens for the DOMContentLoaded event to ensure that the DOM is fully loaded before executing the code. It then adds an event listener to the player form to handle the submission of player data. When a player is added, a new player card is dynamically created and appended to the leaderboard. The buttons within each player card allow you to update the player's score or delete the player from the leaderboard.

Usage
Enter the player's first name, last name, country, and score into the input fields.
Click the "Add Player" button to add the player to the leaderboard.
Use the "Add 5 Points" and "Subtract 5 Points" buttons to adjust the player's score.
Use the "Delete" button to remove the player from the leaderboard.
Enjoy using the leaderboard to track your players' scores!