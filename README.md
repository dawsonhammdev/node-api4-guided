# Web API Deployment Challenge

Guided project for **Web API IV** module.

In this project we will learn how to deploy a Web API to `heroku`.

## Prerequisites

- Sign up for a [heroku](https://www.heroku.com/) free account.

## Instructions

Please fork this repository and follow along **using your fork** as the instructor deploys the API to `heroku`.


## to deploy:
1: Make the port for the api dynamic(instwad of assigning a port we are goign to read the port from the enviornment.)
2: What is the environemnt? It is the computer the application is running on. (const port = process.env.PORT || 5000;//this is how we make the port enviorment dynamic!)  
3: Provide a start script in `package.js` that uses node to run the api. Heroku will run the app using `npm start`. ("start": "node index.js")
4: Create bew application in heroku.
5: Connect it to branch to be deployed from the repo on Github. 
6:  create app and go to deploy tab abd git hub, connect to gihub and repo and then enable automatic deploys from master. 