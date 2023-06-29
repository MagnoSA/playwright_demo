# PLAYWRIGHT-TESTS

Repository with examples for studies on automated tests with **[Playwright](https://playwright.dev/)** for **API** and **UI**.

Tools:

- expected playwright

**NOTE:** The programming language chosen was JavaScript and the OS Windows.

> The **Playwright** enables reliable end-to-end testing for modern web apps. [GET TO KNOW PLAYWRIGHT](https://playwright.dev/)

-----------------------

## Context table

> Index `README`.

  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
  - [Installation](#installation)
  - [How to test](#how-to-test)
  - [How to view the Report](#how-to-view-the-report)
  - [Support](#support)
  - [License](#license)

-----------------------

### Prerequisites

- [Playwright](https://playwright.dev/docs/intro)
- [NodeJS +18](https://nodejs.org/pt-br/download/package-manager/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [VSCode or other IDE](https://code.visualstudio.com/download)

**NOTE:** The project use Node v18 (.nvmrc). It is recommended to use nvm to manage different Node versions in your environment.

-----------------------

### Configuration

> To clone the project:

```bash
$ git clone https://github.com/MagnoSA/playwright_demo.git
```

> IMPORTANT:

  - Do not expose senstive data:

It's necessary to create a root `.env` file of the project as in the example: `.env.example`.

Use the data below:

```env
API_URL=https://reqres.in
UI_URL=https://the-internet.herokuapp.com

USER=tomsmith
PASSWORD=SuperSecretPassword!
```

After creating the .env, your tests are ready to run.

-----------------------

### Installation


> To install all dependencies via **package.json**:

```js
$ cd /playwright_demo
$ npm install
```
-----------------------

### How to test

After confirming the previous settings, follow the steps below:


> To run all API tests:

```js
$ npx playwright test api_test.spec.js
```

> To run all UI tests:

```js
$ npx playwright test ui_test.spec.js
```

> To run debug mode:

```js
$ npx playwright test ui_test.spec.js --debug
```

> To run with open browser mode:

```js
$ npx playwright test --headed
```

### How to view the Report

> To generate the report:

```js
$ npx playwright show-report
```

### Support

- Linkedin: <a href="https://www.linkedin.com/in/rodrigo-azevedo-ab36737a/" target="_blank">**Rodrigo Magno**</a>

-----------------------

### License

[![License](https://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)