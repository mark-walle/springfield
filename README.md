# Springfield Web App

[DEMO HERE](https://limitless-lowlands-10205.herokuapp.com/) hosted on Heroku

You can user the demo link above, or deploy your own fresh instance of the app on Heroku (with a verified free tier account) by clicking this deploy button:
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/mark-walle/springfield)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

### Required:
git, npm, node, angular/cli, heroku/cli, mongo

### Local Setup:

- `git clone <springfield>`
- `cd springfield`
- `mongod --port 27017 --dbpath=./data`
- `npm install` and `npm start` to run locally
- `heroku create` will generate a random `<app-name>` for deployment on the Heroku platform
- `git remote set-url heroku https://git.heroku.com/<app-name>.git` replacing `<app-name>` with its name
- `heroku addons:create papertrail` heroku will load logging (optional)
- `heroku addons:create mongolab` heroku will load a mongodb
- `git push heroku master` to deploy to heroku
- `heroku ps:scale web=1` to check that it's up
- `heroku open` to load the heroku app url in a browser window

### References:

https://devcenter.heroku.com/articles/mean-apps-restful-api
https://angular.io/tutorial/
