# Conway's Game of Life

[![Maintainability](https://api.codeclimate.com/v1/badges/a34d51203e1f4817c6a6/maintainability)](https://codeclimate.com/github/AceIsHuman/game-of-life--cellular-automata/maintainability)

[Deployment 🚀](https://gameoflife-ace.netlify.app/)

Check out this classic computer science program replicated using the React framework! John Conway's "Game of Life" simulates _cellular automaton_ by following a few set of rules for cells on a grid.

Rules:

- An alive cell will continue to live if it has 2 or 3 live neighbors.
- Likewise, and alive cell will die if it has less than 2, or more than 3 live
  neighbors.
- A cell will come alive when it has exactly 3 neighbors.

In this simulation, a user may click on a cell in the grid to change it's state, alive or dead. There are four control buttons: Play, Pause, Clear Grid, & Speed.

- `Play` - begins the simulation
- `Pause` - stops the simulation at the current generation
- `Clear Grid` - removes all live cells from the grid and resets the generation count to zero
- `Speed` - controls the speed, 1x, 2x or 4x, at which the simulation will play.

Examples:

![example-patterns](https://media.giphy.com/media/4VVZTvTqzRR0BUwNIH/giphy.gif)

[from Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns)
