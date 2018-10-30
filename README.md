# **Clickmania**
## Background and Overview
Clickmania is a simple interactive javascript game. The objective of the game is to click on the circles and increase your score before the circle expires. Each time a circle is successfully clicked, the circle multiplies and branches off in random directions at random distances. As the game progresses the circle will increase more.


## Technologies
This project will be implemented using the following technologies:

* Vanilla Javascript for overall sture and game logic
* HTML5 Canvas for DOM manipulation and rendering
* Howler.js for audio/sounds
* Webpack to bundle and serve up the various scripts

There will be a few scripts involved for this project:

`board.js`: responsible for handling the logic for creating and updating the necessary DOM elements

`circle.js`: responsible for handling the logic of the circle

## Functionality & MVP
In Clickmania, the user should be able to:

- [ ]  Start the game
- [ ]  Click on the circles to score points
- [ ]  View current score

### Circle Multiplying
- [ ]  Circle disappears once clicked and makes a sound
- [ ]  At minimum two new circles are generated with animations
- [ ]  Trajectory animations will be varied in direction and velocity 
- [ ]  Trajectory of the new circles that hits out of bounds should treat the border as a wall and bounce appropriately.
- [ ]  Make circles turn colors to indiciate status of the circle.

### Bonus Features
In the future, I would like to add:


- [ ]  Accuracy of the clicker
- [ ]  Add easier/harder difficulty. Making the circles become smaller and smaller

## Implementation Timeline
Day 1:
- [ ]  Review Astroids project
- [ ]  Review Tutorials on Canvas and Howler.js

Day 2: Setup Node modules and get webpack up and running. Create `webpack.config.js` and `package.json`. Setup skeleton 
