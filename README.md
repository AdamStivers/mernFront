# Adam Stivers ePortfolio

A personal portfolio built with React, Vite, and Express.

## Tech Stack
- React 19
- React Router v7
- Vite
- Express 

## Getting Started
npm install
npm run dev

node server.js for backend express serving projects content and a working contact form



## Project Structure
src/
├── components/     #cards and layout     
├── pages/          # Page components
├── data/           # JSON content
├── css/            # Global/card styles
├── index.jsx
├── App.jsx 
index.html         #not in public folder
vite.config.js
package.json

### Pages

- `index.jsx` – standard entry point 
- `about.jsx` – About me, 3 paragraphs
- `skills.jsx` – Marketable skills and abilities (unordered lists)
- `projects.jsx` – 3 projects, each with a paragraph and an image
- `resume.jsx` – Resume using tables and lists (education, work experience, skills, extracurricular activities)
- `contact.jsx` – functional contact form (name, email, phone, message) using type text

## API Usage

Added a NASA astronomy picture of the day as my API. I added it under the paragraph about me, and tryed to make the card fit the style of the site. Space is one of my interests and this fit pretty well. I changed the home page paragraph to mention my interest in space to help transition better. 
