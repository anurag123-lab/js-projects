# Tic Tac Toe ❌⭕

A two-player Tic Tac Toe game that runs in the browser, built with plain **HTML, CSS and JavaScript**. This was my first JavaScript project.

tic-tac-toe/tic tac toe.png

## Features

- **Two players take turns:** X goes first, then O, alternating automatically
- **No overwriting:** once a box is filled, it's disabled and can't be clicked again
- **Winner detection:** after every move, the game checks all **8 winning lines** (3 rows, 3 columns, 2 diagonals)
- **Winner message:** shows who won and **locks the board** so no more moves can be made
- **New Game** and **Reset** buttons clear the board and start over

## How it works

1. **The board** is 9 buttons. `querySelectorAll(".button")` collects them into a list, numbered 0 to 8:
   ```
   0 | 1 | 2
   3 | 4 | 5
   6 | 7 | 8
   ```
2. **Turns:** a `player1` variable (`true` / `false`) tracks whose turn it is. Each click writes `X` or `O` into the box, flips `player1`, and disables that box.
3. **Winning lines** are stored as an array of index triples:
   ```js
   [0, 1, 2], [3, 4, 5], [6, 7, 8],   // rows
   [0, 3, 6], [1, 4, 7], [2, 5, 8],   // columns
   [0, 4, 8], [2, 4, 6]               // diagonals
   ```
4. **`checkWinner()`** runs after every click. For each line, it reads the three boxes; if all three are filled **and** equal, that player wins. `showWinner()` displays the message and `disableButtons()` locks the board.
5. **`resetGame()`** empties every box, enables them again and hides the message. Both **New Game** and **Reset** call it.

## Tech used

- **HTML:** 9 buttons for the board, plus the message and control buttons
- **CSS:** board layout and styling
- **JavaScript:** `querySelector` / `querySelectorAll`, click event listeners, arrays, loops, and showing/hiding elements with `classList`

## What I learned

- Selecting many elements at once and looping over them
- Using a variable to track game **state** (whose turn it is)
- Representing a rule (the winning lines) as **data** in an array, instead of writing 8 separate `if` checks
- Breaking logic into small functions: `checkWinner`, `showWinner`, `disableButtons`, `resetGame`

## How to run

Open `index.html` in any browser. No installation needed.

## Future improvements

- Detect a **draw** when all 9 boxes are filled and nobody has won
- Keep a **score** across games
- Highlight the winning line
- Play against the computer
