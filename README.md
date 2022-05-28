# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

The purpose of this small project serves to test my skills in the frontend domain of developing the user interface, as well as calling an external API and the considerations I should take (e.g.: Disabling the button in the API call downtime).

This also serves as a refresher before taking on projects with increasing difficulty for fullstack / frontend work (such as full-fledged, non-trivial applications, open-source contributions, etc.).

Lastly, my goal behind this project, is to add more projects under my portfolio. I really enjoy coding and would love to learn more about creating whole applications, be it for future professional work or for my own personal ambitions!

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot displaying the user interface of an advice generator application](https://github.com/relyzer/Random-advice-generator/public/snapshot/advice-snapshot.png)


### Links

- Solution URL: [https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub/advice-generator-app-D3EyP2nDoF/solutions](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub/advice-generator-app-D3EyP2nDoF/solutions)
- Live Site URL: [https://fascinating-puffpuff-81f5ee.netlify.app](https://fascinating-puffpuff-81f5ee.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The /q tag for quotes, without using unicode quotation marks.  
```html
<p className="quote">
  {quote ? <q>{quote}</q> : "Click on the dice to receive an advice!"}
</p>
```

Using max-width: fit-content, I was able to create a responsive design without the use of media queries.  
```css
.card {
  max-width: fit-content;
  padding: 1em;
  border-radius: 16px;
  background-color: hsl(217, 19%, 24%);
}
```

### Continued development

Areas I would like to focus and improve on when time allows -  
1.) CSS transitions  
2.) Responsive design / mobile-first workflow  
3.) ESLinting and best practices  
4.) File architecture/organisation  

### Useful resources

- [MDN web documentations](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries) - I had to explore the application of media queries with raw CSS and the best conventions to follow for both CSS and SCSS (if any). As of the working on this project, I am more familiar with the use of media queries and breakpoints through TailwindCSS, but not through pure CSS, which is vital for me to understand progressing forward as a frontend / fullstack engineer.

## Author

- Website - [Kevin Tan](https://www.kevintanyh.com)
- Frontend Mentor - [@relyzer](https://www.frontendmentor.io/profile/relyzer)
