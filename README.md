# JavaScript Projects

This repository collects the JavaScript projects I build during my **MERN stack learning phase**. Each project is small and focused on practising core JavaScript concepts (DOM manipulation, events, array methods, `localStorage` and dates) before moving on to React, Node.js and MongoDB.

All projects are built with plain **HTML, CSS and JavaScript**, with no frameworks or libraries.

## Projects

### 1. Tic Tac Toe (`tic-tac-toe/`)

A two-player Tic Tac Toe game played in the browser.

**Features**
- Two players take turns placing X and O on a 3×3 board
- Checks all 8 winning patterns (rows, columns and diagonals) after every move
- Shows a winner message and locks the board when someone wins
- Reset and New Game buttons to clear the board and play again

**Concepts practised:** `querySelectorAll`, click event listeners, `forEach`, nested arrays, toggling CSS classes, enabling/disabling buttons

### 2. DSA Reminder (`dsa-reminder/`) 🚧 In progress

A revision tracker for DSA problems. The idea is simple: after you solve a problem, you should re-solve it a few days later so it sticks. This app remembers which problems are due for revision so you don't have to.

**Built so far**
- Shows today's date in the header
- Form to add a problem with its name, link, type (array, string, tree, graph, DP…) and difficulty
- Displays every added problem in a table, with the link opening in a new tab
- Live count of total problems
- Saves problems to `localStorage`

**Planned**
- Automatic re-solve date 7 days after a problem is added
- "Due today" section listing problems to revise
- Mark a problem as re-solved (pushes its next date forward) or delete it
- Filter problems by type
- Load saved problems when the page opens

**Concepts practised:** form `submit` events and `preventDefault()`, creating DOM elements dynamically, array methods (`push`, `forEach`, `filter`), the JavaScript `Date` object, `localStorage` with `JSON.stringify`/`JSON.parse`

## How to run

1. Clone the repository:
   ```bash
   git clone https://github.com/anurag123-lab/js-projects.git
   ```
2. Open the project folder you want to try.
3. Open `index.html` in your browser. No installation needed.

## What's next

More projects will be added here as I continue learning, leading up to full-stack MERN applications.
