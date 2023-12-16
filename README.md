# Concept

(**In progress**, still working on it...)\
This template is made mostly for beginners in order to start simple react project faster. It's pre-configured with a minimal set of simple tools.\
I strongly recommand you explore those differents tools repo and/or website so you can learn how to use them to their best. You'll find all links below. 

### Project Initialization

- In **VSCode**, install plugins [Prettier - Code formatter](https://github.com/prettier/prettier-vscode) and [ESLint](https://github.com/Microsoft/vscode-eslint) and configure them.
- Clone this repo, enter it.
- Run command `npm install`.
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters.

### Tools

- [Vite](https://www.npmjs.com/package/vite)
- [Express](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Mysql2](https://www.npmjs.com/package/mysql2)

## Frontend

- Enter the directory and start with `npm run dev`.
- Clean `App.jsx`
    > including homepage route using [react-router-dom](https://reactrouter.com/en/main)
- `App.css` reset
- Custom [Sass](https://github.com/sass/sass) properties & utilities
    > Sass isn't included in this project. Install it globally `npm install -g sass` or use vscode extension like [Live Sass Compiler](https://github.com/glenn2223/vscode-live-sass-compiler)
    > .gitignore containing `**.css.map`
- `pages`, `components` & `styles` directories.

## Backend

- Enter the directory and start with `npm run dev`.
- server.js including express app, basic routes & middlewares
- db.js connecting to your localhost mysql database
    > don't forget to add and fill the `.env` file.
- `db`, `routes` & `controllers` directories.

## Git

### Reset GIT

[Managing remote repositories](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)

[Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

- `git remote add origin <NEW_REMOTE_URL>`
<!-- set a new remote file -->

- `git remote -v`
<!-- Verify new remote -->
> should show 👉 `origin <NEW_REMOTE_URL> (fetch)`
> should show 👉 `<NEW_REMOTE_URL> (push)`

### Delete GIT

- `rm -r .git` 
- (`chmod -R +w ./yourdirectory` might be necessary)
<!-- Must be in the directory -->
