### Sample MERN stack template

---

Package manager: npm

Formatter: Prettier

---

#### Backend - <i>[NodeJS](https://nodejs.org/en/docs) + [Express](https://expressjs.com/) + [MongoDB](https://www.mongodb.com/)</i>

using [body-parser](https://www.npmjs.com/package/body-parser), [nodemon](https://www.npmjs.com/package/nodemon), [dotenv](https://www.npmjs.com/package/dotenv)

[MongoDB](https://www.mongodb.com/) - Use either with Atlas Cloud or Local Community Server

---

#### Frontend - <i>[React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/)</i>

| Use                | Tool                                                                               |
| :----------------- | :--------------------------------------------------------------------------------- |
| CSS Pre-processor  | [Sass](https://sass-lang.com/)                                                     |
| CSS Post-processor | [postcss-loader](https://www.npmjs.com/package/postcss-loader)                     |
| Bundler            | [Webpack](https://webpack.js.org/)                                                 |
| Transpiler         | [Babel](https://babeljs.io/)                                                       |
| Linter             | [ESLint](https://eslint.org/)                                                      |
| Testing            | [JEST](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) |
| Env. Variables     | [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)                     |

---

### Either...

1. Clone repo

```
git clone https://github.com/NikolaosKantartzopoulos/mern-template.git
```

2. Create .env file useing .env.example files as a base

3. Setup Backend - cd backend/

```json
"scripts": {
	"start": "nodemon app.js",
}
```

4. Setup Database - cd to ./backend/utils/databaseUI.js
   4.1 Comment in/out preferable options for
   _ MongoDB Community Server **OR**
   _ Atlas Cloud Server

5. Setup Frontend - cd frontend/

```json
"scripts": {
	"build": "webpack --config webpack.config.js",
	"dev": "webpack-dev-server --mode development",
	"lint": "eslint ./src",
	"lint:fix": "eslint . --fix",
	"test": "jest"
},
```

---

### or...

<i>Follow along as I explain how to set this up manually.</i>

#### Under Construction...
