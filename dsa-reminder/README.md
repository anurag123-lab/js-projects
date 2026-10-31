# DSA Reminder 🧠

A simple revision tracker for DSA problems. Add a problem after you solve it, and the app reminds you to **re-solve it 7 days later**, so the patterns actually stick instead of being forgotten.

Built with plain **HTML, CSS and JavaScript**: no frameworks, no backend.

![<img width="1914" height="883" alt="image" src="https://github.com/user-attachments/assets/30fb716d-54b3-4496-983b-6ccbe8d75a7c" />
] (dsa.png)

## Why I built it

When I practise DSA, I solve a problem once and forget it a few weeks later. Re-solving a problem after a gap is one of the best ways to remember it (this is called **spaced repetition**). I wanted a small tool that tells me *which* problems to revisit each day, so I built one while learning JavaScript and the DOM.

## Features

- **Add a problem** with its name, type (array, string, recursion…), link and difficulty
- **Form validation:** a problem can't be added unless every field is filled
- **Automatic due date:** every new problem is due for revision **7 days later**
- **Due today list:** shows every problem whose due date is **today or earlier**, so missed revisions don't get lost
- **Resolve button:** after re-solving a problem, one click moves its due date **7 days ahead** and takes it off today's list
- **Delete button:** remove a problem from the full list
- **Live counters** for total problems and problems due today
- **Today's date** shown at the top of the page
- **Saved in the browser** with localStorage: problems are still there after refreshing or closing the tab

## How it works, end to end

### 1. Adding a problem
1. I fill in the form and click **Add**.
2. The `submit` handler stops the page from reloading (`preventDefault`), reads every input and checks that none are empty.
3. It creates a problem object and pushes it into the `problems` array:
   ```js
   { id, problem, type, link, difficulty, solved: false, due: addDays(7) }
   ```
   - `id` comes from `Date.now()`, so every problem has a unique id
   - `due` is a `"YYYY-MM-DD"` date string, 7 days from today
4. The array is saved to localStorage with `JSON.stringify`.
5. The form is cleared and `render()` redraws the page.

### 2. Drawing the page
- **`rowbuilder(problem)`** builds one table row (name, link, type, difficulty) for one problem. Both lists reuse it, so row-building code lives in one place.
- **`render()`** draws the **Total** list: it loops over every problem, builds its row, adds a **Delete** button, and then calls `duerender()`.
- **`duerender()`** draws the **Due today** list: it keeps only problems where `problem.due <= today`, builds their rows and adds a **Resolve** button.
- Because the dates are `"YYYY-MM-DD"` strings, comparing them with `<=` works correctly (year, then month, then day).

### 3. Re-solving a problem
1. I click **Resolve** on a row in the Due list.
2. One click listener on the Due table (**event delegation**) finds the clicked button with `closest(".resolve-btn")` and reads its `data-id`.
3. `find` gets that problem from the array and gives it a new date: `due = addDays(7)`.
4. The array is saved and `render()` runs. The problem leaves the Due list (its date is now in the future) but stays in the Total list.

### 4. Deleting a problem
1. I click **Delete** in the Total list.
2. One delegated listener on the Total table reads the button's `data-id`.
3. `filter` keeps every problem **except** that one, the array is saved, and `render()` redraws both lists.

### 5. Reopening the page
On load, the app reads the saved list with `JSON.parse(localStorage.getItem("problems"))`, falls back to an empty array if nothing is saved yet, and calls `render()` once.

## Tech used

- **HTML** for the form and the two tables
- **CSS** for layout and button styles
- **JavaScript**: DOM methods (`createElement`, `append`, `replaceChildren`, `closest`), event listeners and event delegation, array methods (`forEach`, `filter`, `find`), `Date`, and `localStorage` with `JSON`

## What I learned

- Building and updating the page with the **DOM** instead of writing HTML by hand
- **Event delegation:** one listener on a parent handles clicks on every button, including rows added later
- Keeping the **array as the single source of truth**: change the data first, then redraw the page from it
- Saving and loading data with **localStorage** and `JSON.stringify` / `JSON.parse`
- Choosing the right array method: `filter` to keep or remove items, `find` to get one item to change
- Working with dates and comparing them as `"YYYY-MM-DD"` strings
- **Refactoring:** moving repeated code into a helper function (`rowbuilder`)

## How to run

1. Clone the repo:
   ```bash
   git clone https://github.com/anurag123-lab/js-projects.git
   ```
2. Open the `dsa-reminder` folder.
3. Open `index.html` in any browser. No installation needed.

## Project structure

```
dsa-reminder/
├── index.html    # form, Due today table, Total table
├── style.css     # styles
├── script.js     # all the app logic
└── README.md
```

