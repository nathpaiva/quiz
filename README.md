### Setup

This repo provides a React application bootstrap. To get setup, run these commands:

- Install dependencies:

```sh
npm install
```

- Run it locally

```sh
npm start:
```

- Run tests:

```sh
npm run test:coverage
```

The command above will:

- Start an HTTP server for the API (localhost:4000);
- Start an HTTP server (powered by react-scripts) for the front-end (localhost:3000);

### API instructions

This repository provides a basic API (running under port 4000) that returns the required data for the application.
The API will be available after running the `npm start` command.

#### GET Questions List

`http://localhost:4000/api/questions`
