# Webpack react template

This is a template to a react project using webpack + babel to build react applications.  
There are some configurations to help bootstrap react projects, like:
- different webpack configurations to production and development.
- babel, so you can use the newest features of javascript.
- prettier + eslint so you don't neet to worry about code format.
- husky + lint-staged to run some scripts before you commit code

Inside the newly created project, you can run some built-in commands:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.


Your environment will have everything you need to build a modern single-page React app:

- React, JSX, ES6, TypeScript and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.