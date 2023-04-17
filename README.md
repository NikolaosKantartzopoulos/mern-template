# MERN stack template

Package manager: [npm](https://www.npmjs.com/)

## Backend - <i>[NodeJS](https://nodejs.org/en/docs) + [Express](https://expressjs.com/) + [MongoDB](https://www.mongodb.com/)</i>

using [body-parser](https://www.npmjs.com/package/body-parser), [nodemon](https://www.npmjs.com/package/nodemon), [dotenv](https://www.npmjs.com/package/dotenv)

[MongoDB](https://www.mongodb.com/) - Use either with Atlas Cloud or Local Community Server

---

## Frontend - <i>[React](https://react.dev/) + [Typescript](https://www.typescriptlang.org/)</i>

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

# Either...

## 1. Clone repo

```
git clone https://github.com/NikolaosKantartzopoulos/mern-template.git
```

---

## 2. Create .env file

### 2.1 Use .env.example files as a reference

### 2.2 Be sure to update FRONTEND_SERVER_URL at backend/.env file for CORS headers

---

## 3. Setup Database

### 3.1 cd to ./backend/utils/databaseUI.js

### 3.2 Comment in/out preferable options

- MongoDB Community Server **OR**
- Atlas Cloud Server

---

## 4. Install packages

```bash
cd backend && npm i && cd ../frontend && npm i && cd ../
```

---

## 5. Use stack

### 5.1 cd in frontend/

```bash
npm run dev
```

### 5.2 cd in backend/

```bash
npm run start
```

---

# or...

<i>Follow along as I explain how to set this up manually.</i>

## 1. Create project folder structure, git init

```bash
mkdir mern-template-sample && cd mern-template-sample && mkdir backend frontend && touch README.md .gitignore && git init
```

---

## 2. Backend

```bash
cd backend && touch app.js && npm init -y
```

### 2.0.1 Add the following script at package.json

```json
// package.json
// ...
  "scripts": {
    "start": "nodemon app.js",
// ...
},
```

<em>OPTIONAL: Create controllers, routes and utils folders</em>

```bash
mkdir controllers routes utils
```

## 2.1 Install Express and MongoDB

```bash
npm i --save express mongodb
```

## 2.2 Basic utilities

```bash
npm i --save-dev body-parser nodemon prettier
```

### 2.2.1 Prettier config file

```bash
echo 'module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: false,
};' >  prettier.config.js

```

## 2.3 Install [dotenv](https://www.npmjs.com/package/dotenv)

<em>for environment variables and create .env file</em>

```bash
npm i --save dotenv && touch .env
```

---

## 3. Frontend

```bash
cd ../frontend && mkdir src public && cd public && touch main.scss && cd ../ && npm init -y
```

3.0.1 Use the following scripts at package.json

```json
// package.json
// ...
  "scripts": {
    "build": "webpack --mode=production --config webpack.config.js",
    "dev": "webpack-dev-server --mode development",
    "lint": "eslint ./src",
    "lint:fix": "eslint . --fix",
    "test": "jest"
  },
```

---

## 3.1 React

```bash
npm i --save react react-dom
```

### 3.1.1 Folder structure

```bash
cd src && mkdir components pages styles && touch app.tsx index.html index.tsx
```

### 3.1.2 index.tsx

```bash
echo 'import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);' > index.tsx
```

### 3.1.3 app.tsx

```bash
echo 'import React from "react";
import Home from "./pages/home";
import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;' > app.tsx
```

### 3.1.4 Return to frontend folder

```bash
cd ../
```

---

## 3.2 Typescript

Install Typescript and include types for React library

```bash
npm i --save-dev typescript @types/react @types/react-dom
```

<em>OPTIONAL: manually create a config file for ts, or use the one I provide...</em>

```bash
npx tsc --init
```

Our ts.config.json file will have two parts: Compiler Options and the Include path

- compilerOptions: (honorary mentions)
  - "jsx": "react-jsx"
    - Controls how JSX constructs are emitted in JavaScript files. This only affects output of JS files that started in .tsx files.
    - react-jsx: Emit .js files with the JSX changed to \_jsx calls.
  - "baseUrl": "src",
    - Sets up paths relative to this.
  - "paths": {
    "@components/\*": ["components/\*"],
    "@pages/\*": ["pages/\*"],
    "@styles/\*": ["styles/\*"]
    }
- include: "src/" directory
  - will be the only place with Typescript in our frontend project.

That being said:

```bash
echo '{
  "compilerOptions": {
    "target": "es2015",
    "lib": ["dom", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx",
    "baseUrl": "src",
    "paths": {
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
      "@styles/*": ["styles/*"]
    }
  },
  "include": ["./src/**/*"]
}' > tsconfig.json
```

---

## 3.3 Babel

Use Babel to compile our Typescript code to Javascript and then to "older-browser-friendly" code.

```bash
npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/preset-typescript
```

Create and write babel.config.json file.
It will "work" in reverse order (right to left), so typescript should be compiled to js/jsx and js/jsx to pre ES6 Javascript.

```bash
echo '{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}' > babel.config.json
```

---

## 3.4 Formatting: Prettier

```bash
npm i --save-dev prettier && echo '{
"trailingComma": "es5",
"tabWidth": 2,
"semi": true,
"singleQuote": false
}
' > .prettierrc
```

---

## 3.5 Linter: ESLint

```bash
npm i --save-dev eslint eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### 3.5.1 ESLint config file

```bash
echo '{
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "settings": {
    "react": {
      "version": "999.999.999"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "max-len": ["warn", { "code": 80 }]
  }
}' > .eslintrc.json
```

---

## 3.6 Webpack

```bash
npm i --save-dev  webpack webpack-cli webpack-dev-server && touch webpack.config.js
```

### 3.6.1 Entry and output

```js
// webpack.config.js
const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		hot: true,
		open: true,
		port: 3000,
	},
};
```

### 3.6.2 html-webpack-plugin && index.html

<em>This is the index file used by html-webpack-plugin to create a template. Includes a div with id="root" where React works its magic! </em>

#### 3.6.2.1 Install [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

```bash
npm i --save-dev html-webpack-plugin
```

#### 3.6.2.2 Create index.html file

```bash
cd src && echo '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sample Title from index.html</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>' > index.html && cd ../
```

```js
// webpack.config.js
// ...
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// ...
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"),
			favicon: path.resolve(__dirname, "./public/images/favicon.ico"),
		}),
	],
};
```

### 3.6.3 Webpack Typescript configuration

<em>[ts-loader](https://www.npmjs.com/package/ts-loader) - Typescript loader for Webpack</em>

```bash
npm i --save-dev ts-loader
```

```js
// webpack.config.js
// ...
module.exports = {
	// ...
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
```

### 3.6.4 Webpack CSS configuration

#### 3.6.4.1 Install packages

```bash
npm i --save-dev css-loader style-loader sass sass-loader postcss postcss-loader postcss-preset-env
```

#### 3.6.4.2 Postcss config file

```bash
echo 'module.exports = {
  plugins: [["postcss-preset-env"]],
};' > postcss.config.js
```

#### 3.6.4.3 Update webpack config file

<em>"use:" is read in reverse order by webpack</em>

```js
// webpack.config.js
// ...
module.exports = {
	// ...
	module: {
		rules: [
			// ...
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
			},
		],
	},
};
```

### 3.6.5 Webpack file-loader rules

```js
// webpack.config.js
// ...
module.exports = {
	// ...
	module: {
		rules: [
			// ...
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				use: ["file-loader"],
			},
		],
	},
};
```

---

## 3.7 Environment variables

### 3.7.1 Install dotenv-webpack

```bash
npm i --save-dev dotenv-webpack
```

### 3.7.2 Update webpack config

```js
// webpack.config.js
// ...
const Dotenv = require("dotenv-webpack");

module.exports = {
	// ...
	plugins: [
		// ...
		new Dotenv(),
	],
};
```

### 3.7.3 Create .env file

```bash
cd src && touch .env && cd ../
```

---

## 4 Testing

## 4.1 Install [JEST](https://jestjs.io/)

```bash
npm i --save-dev jest jest-environment-jsdom @types/jest babel-jest
```

## 4.2 jest.config.js && jest.setup.js

```bash
echo 'module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
};' > jest.config.js &&
echo 'import "@testing-library/jest-dom";
' > jest.setup.js
```

## 4.1 Install [React Testing Library](https://testing-library.com/)

```bash
npm i --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event
```
