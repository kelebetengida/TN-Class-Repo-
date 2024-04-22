// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

//// The year color is changing every 1 second


//// The date and time background color is changing every on seconds


//// Completed challenge has background green


//// Ongoing challenge has background yellow


//// Coming challenges have background red

 // JavaScript functionality
//  Develop the following application, use the following HTML and css file to get started with. Apply all the styles and functionality using JavaScript only. Please psudo code what each line is doing. 

// The year color is changing every 1 second

function changeYearColor() {
    const year = document.querySelector('h1');
    setInterval(() => {
      year.style.color = getRandomColor();
    }, 1000);
}

// The date and time background color is changing every on seconds

function changeDateTimeBackground() {
    const dateTime = document.querySelector('.wrapper');
    setInterval(() => {
      dateTime.style.backgroundColor = getRandomColor();
    }, 1000);
  }

// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
function updateChallengeStatus() {
    const challenges = document.querySelectorAll('#challenges li');
    challenges.forEach((challenge) => {
      if (challenge.textContent.includes('Done')) {
        challenge.classList.add('completed');
      } else if (challenge.textContent.includes('Ongoing')) {
        challenge.classList.add('ongoing');
      } else {
        challenge.classList.add('coming');
      }
    });
  }
//create a function that generates random color
 
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
console.log(Math.floor(Math.random() * 16))
  // Call functions
  changeYearColor();
  changeDateTimeBackground();
  updateChallengeStatus();
  console.log(getRandomColor())