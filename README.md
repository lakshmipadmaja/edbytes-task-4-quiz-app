# EdBytes Task 4 – Three-Question Quiz

A beginner-friendly quiz built from the supplied EdBytes TASK-FSD-03 starter pack.

## Features
- Displays one supplied question and its three answer buttons at a time.
- Gives immediate correct/incorrect feedback and identifies the correct answer.
- Locks answer buttons after the first selection, so each question is counted only once.
- Displays the final score out of 3 after the last answer.
- Includes an optional try-again button.

## Run locally
Open `index.html` in a modern web browser. No installation or server is required.

## Test notes
- Correct-answer run: select `h1`, `CSS`, and `7` → expected score `3 / 3`.
- Mixed-answer run: select `p`, `CSS`, and `5` → expected score `1 / 3`.
- Boundary check: clicking an answer more than once does not add extra points; other choices become disabled after the first selection.

## Files
- `index.html` – page structure
- `style.css` – responsive styling
- `app.js` – question rendering, answer handling, feedback, and scoring

EdBytes Full Stack Development · TASK-FSD-03
