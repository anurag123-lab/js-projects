# JavaScript Projects

The projects I build while learning JavaScript, as part of my journey toward full-stack (MERN) development. Each project is built with plain **HTML, CSS and JavaScript**, with no frameworks, so I can learn how the browser and the DOM really work before moving to React.

## Projects

| Project | What it does | Key concepts |
|---|---|---|
| [**DSA Reminder**](./dsa-reminder) | A revision tracker that reminds me to re-solve DSA problems 7 days after solving them | DOM rendering, event delegation, localStorage + JSON, dates, `filter` / `find`, refactoring |
| [**Tic Tac Toe**](./tic-tac-toe) | A two-player Tic Tac Toe game in the browser | DOM events, `querySelectorAll`, arrays of winning patterns, game state |

### 🧠 DSA Reminder
Add a DSA problem after solving it, and it shows up in a **Due today** list 7 days later. Re-solve it, click **Resolve**, and it moves another 7 days ahead. Problems are saved in the browser, so they stay after a refresh.



➡️ [Read more](./dsa-reminder/README.md)

### ❌⭕ Tic Tac Toe
Two players take turns placing X and O on a 3×3 board. The game checks all 8 winning lines after every move, announces the winner and locks the board. **New Game** and **Reset** start over.


➡️ [Read more](./tic-tac-toe/README.md)

## Skills practised across these projects

- **DOM manipulation:** selecting, creating, updating and removing elements
- **Events:** click and submit listeners, `preventDefault`, event delegation
- **Arrays and objects:** `forEach`, `filter`, `find`, storing app data as an array of objects
- **State:** keeping data in variables and redrawing the page from it
- **Browser storage:** saving and loading data with `localStorage` and `JSON`
- **Clean code:** splitting logic into small functions and removing repeated code

## How to run any project

1. Clone the repo:
   ```bash
   git clone https://github.com/anurag123-lab/js-projects.git
   ```
2. Open a project folder (for example `dsa-reminder`).
3. Open its `index.html` in any browser. No installation needed.

## Repo structure

```
js-projects/
├── dsa-reminder/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── tic-tac-toe/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
└── README.md
```

## Coming next

- **GitHub Profile Analyzer:** search any GitHub user and see their profile, top languages and repos (async JavaScript, `fetch`, APIs)
- **Quiz app:** built solo, from a blank folder, without tutorials

More projects will be added here as I keep learning. 🚀
