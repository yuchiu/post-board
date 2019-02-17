# Post Board

Live Demo: [Link](http://post-board.surge.sh)

- project setup
  - bootstrapped project with Create React App
  - ejected Create React App to integrate SCSS and other custom webpack settings
- external libraries
  - eslint, prettier
    - standardize coding format
  - uuid
    - generate id for post & comments
  - moment.js
    - format datetime
  - react-router-dom
    - support for single page application
  - redux, react-redux
    - support for global store
- implementation highlights
  - mobile first approach responsive design
  - client side form validation
  - entire layout implemented only in CSS without any use of external libraries
  - abstracted repetitive component structures and stylings into reusable modules

---

## Getting Started

- install dependencies & start application  
  Application will be serving on http://localhost:3000

```terminal
cd post-board
npm install
npm start
```

---
