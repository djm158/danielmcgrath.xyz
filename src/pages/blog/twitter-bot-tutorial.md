---
title: "How to build a twitter bot with Node.js and Heroku"
date: "2018-03-05"
---

In this tutorial, we are going to create a twitter bot that tweets open Github issues with the tag 'help wanted'.

The source is available on my [Github](https://github.com/djm158/help-wanted-bot) and you can view the live bot [here](https://twitter.com/helpwantedbot).

### Getting Started

You're going to need the following:

* A [Twitter](https://twitter.com) account with a linked phone number
* Node.js installed locally
* A [Heroku](https://www.heroku.com/) account

### Dependencies

We're going to use [twit](https://github.com/ttezel/twit) and [octokit](https://github.com/octokit/rest.js) as clients to Twitter and Github's APIs, respectively. We're also going to use [dotenv](https://github.com/motdotla/dotenv) to load environment variables from a `.env` file. 

To get started:

```sh
$ mkdir helper-bot
$ cd helper-bot
$ npm init
$ npm install --save twit @octokit/rest dotenv
$ touch .env .gitignore app.js
```

Your `package.json` should look something like this:

```json
{
  "name": "help-wanted-bot",
  "version": "1.0.0",
  "description": "twitter bot that tweets issues with tag 'help-wanted'",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },
  "keywords": [
    "twitter",
    "github"
  ],
  "author": "Dan McGrath",
  "license": "ISC",
  "dependencies": {
    "@octokit/rest": "^14.0.9",
    "dotenv": "^5.0.1",
    "twit": "^2.2.9"
  }
}
```

I added some keywords and a start script so you can run the app via `npm start`.

### Handling credentials

Once you've successfully created your twitter app, you should get to a screen with a bunch of api keys. We're going to keep them in the `.env` file, which we'll add to our `.gitignore` file so we don't accidentally commit it to source control.

Your `.env` file should look something like this:

```
CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
ACCESS_TOKEN=your_access_token
ACCESS_TOKEN_SECRET=your_access_token_secret
```

and your `.gitignore` should look like:

```
node_modules
.env
```

### Scaffolding our app

Now we're going to dive into the js. First, we'll need to include the dependencies we'll be using to develop the app. At the top of your `app.js` file, add the following lines:

```js
const twit = require('twit');
const octokit = require('@octokit/rest')();
require('dotenv').config();
```

Now we'll be able to use `twit` and `octokit` to interact with Twitter and Github, respectively. We also loaded the api keys in our `.env` file into environment variables. We can interact with these via Node's [process.env](https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_env) object. 

For example, the `CONSUMER_KEY` variable in `.env` is available as `process.env.CONSUMER_KEY`. We will use this to provide `twit` our credentials.

Add the following lines to your `app.js`:

```js
const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const Twitter = new twit(config);
```

We've created a `config` object with fields mapping to our credentials loaded in `process.env`. We provided this object to `twit`'s constructor, creating a new object `Twitter`. The `Twitter object will now be able to make authenticated requests to Twitter's API. 

Let's test it out!

### Our bot's first tweet

Let's create a function that will post a tweet to our account (don't worry, we can easily delete this tweet later). 

Add the following function to `app.js`:

```js
function postTweet(data) {
  Twitter.post('statuses/update', {
    status: data
  }, function (err, data, response) {
    console.log(data)
  })
}

postTweet()
```

The `postTweet` function calls `twit`'s `post` method to create a tweet with the status "Hello, world!". You'll notice that the last argument to the `post` function is an unnamed function. This is known as a `callback`. It is a function that will execute when `post` has finished. We simply log the data response to the console in our `callback`. 

Let's try this out!

On the command line, run the following:

```sh
$ npm start
```

If we navigate to our bot's twitter page (mine is https://twitter.com/helpwantedbot) we'll see our bot's first tweet!

![](helloworldtweet.PNG)

Now we're talking. Next we'll get up and running with Github's API and starte **saving the world** (the open source world, that is).

### Tweet some issues 