# Automaton-v21
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/BurhanH/Automaton-v21/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/BurhanH/Automaton-v21.svg?branch=master)](https://travis-ci.org/BurhanH/Automaton-v21)

## Intro
Did you know there is an alternative solution to validate/test the web application? Let me introduce [the Cypress](https://www.cypress.io/).
If you are familiar with JavaScript, Mocha test framework, and web stack definitely you should try it.

## Structure and approach
```text
-- automaton-v21
   |-- .travis.yml
   |-- LICENSE
   |-- README.md
   |-- cypress.json
   |-- package.json
   `-- cypress
       `-- integration
           `-- test.js
```
The repository structure is simple. It has as usual [.travis.yml](.travis.yml) configuration file for Travis CI, [License](LICENSE), Readme.md, cypress.json, [package.json](package.json), and [test.js](/cypress/integration/test.js).

The last file (test.js) describes 2 test suites. The first test suite for UI testing contains 2 simple tests like `go to google.com` and the second one is `try to perform search action and get some results`. The second test suite for REST API testing contains 2 tests - `go to a specific API endpoint and get a positive response from server` and `get first quote`.
You may check test results [on Travis CI](https://travis-ci.org/github/BurhanH/Automaton-v21/jobs/702210095).

## How it works
![alt text](how-it-works.gif "How it works")

## Pros and Cons
Uder development

## TODOs 
- Add more tests.
- Find a solution to extract log files and video files as a zip package from Travis CI.

## Technology stack and documentation
[Cypress](https://www.cypress.io/) <br>
[GitHub](https://help.github.com/en) <br>
[Travis](https://docs.travis-ci.com/) <br>
[Node.js](https://nodejs.org/en/) <br>
[npm](https://www.npmjs.com/) <br>
[mocha](https://mochajs.org/) <br>
