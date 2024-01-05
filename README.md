# Concept 📝

![blankReactApp](./frontend/src/assets/Blank%20React%20App.svg)

(**In progress**, still working on it...)

This template is mostly made for beginners in order to start simple react project faster. It's pre-configured with a minimal set of simple tools.\
I strongly recommand you explore those differents tools repo and/or website so you can learn how to use them to their best. 

For the backend, you'll find a `SQL` branch <sub><sup>( MySQL )</sup></sub> and a `NoSQL` one <sub><sup>( MongoDB )</sup></sub>. 

You'll find all instructions and links below. 

### Project Initialization

- In **VSCode**, install plugins [Prettier - Code formatter](https://github.com/prettier/prettier-vscode) and [ESLint](https://github.com/Microsoft/vscode-eslint) and configure them.
- Clone this repo, enter it.
- Use `git checkout mysql` OR `git checkout mongodb` to access the setup you need.
- Delete `.git` and initialize a new one (see below).
- Run command `npm install`.
- Run command `npm run dev` in each directory `backend` & `frontend`.
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters.

### Tools 🛠️

- [Vite](https://www.npmjs.com/package/vite)
- [Express](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Sass](https://www.npmjs.com/package/sass)

## Frontend

- Clean `App.jsx`
    - including homepage route using [react-router-dom](https://reactrouter.com/en/main)
- `App.scss` reset
- Custom [Sass](https://github.com/sass/sass) properties & utilities `.styles/_utilities.scss`
    - Sass is included in this project. If you want to use vscode extension like [Live Sass Compiler](https://github.com/glenn2223/vscode-live-sass-compiler), or don't use it at all, feel free to `npm uninstall sass`.
    -  .gitignore containing `**.css.map` <sub><sup>( in case of vscode extension )</sup></sub>
- `pages`, `components`, `styles` directories.

## Backend 

- `server.js` including express app, basic routes & middlewares.
- `routes` directory.

## Git

### Delete GIT 💣

- `rm -r .git` 
> (`chmod -R +w .` might be necessary)
<!-- Must be in the directory -->

### Init GIT 🚀

- `git init -b main`
<!-- initialize git on main branch -->

### Reset GIT

[Managing remote repositories](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)

[Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)

- `git remote add origin <NEW_REMOTE_URL>`
<!-- set a new remote file -->

- `git remote -v`
<!-- Verify new remote -->
> should show 👉 `origin <NEW_REMOTE_URL> (fetch)`\
> should show 👉 `<NEW_REMOTE_URL> (push)`

Check this amazing tuto, on [Git & Github](https://youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR&si=MrwPuJGcRTkmewyQ).




