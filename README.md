# MovieGenieApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Launching
Download the repository, unzip, then cd into it on command line/terminal. Run ```npm install``` (assuming you have npm already) to install dependencies, then ```npm run build``` to compile & run. It should open a new window in your browser.

## Angular code

Found in src/
Angular serves our front end, starting from index.html. The custom tags, starting with <app-root>, link to components, which are web page pieces that come in and out as the user navigates the site. This is why angular apps are usually called "single-page" apps.
<app-root> code can be found in src/app.component.html (component files always have .component. in them, just like service files, which handle background information, always have .service. in them)

## Express code

The main express launcher is in ./server.js, which is what we use to launch the site. The rest of it is in ./server. Models are classes, we need at least a User class and a Movie class. Controllers do CRUD operations (the 4 basic REST API things), ideally one controller with several functions for each Model. Right now config just connects to my local mongoose database, if you'd rather use your own or some local file data... figure it out my dude.

I'd say you can ignore about a good half of the files in here, they're not really relevent.

This app already has bootstrap as a dependency so check out some of the cool things you can do with it:
https://getbootstrap.com/docs/4.0/components/card/

Doing this tutorial fully gave me a lot of confidence on the front end of the app:
https://angular.io/tutorial

Here's the youtube channel I watched and was a good start, not really gonna depend on it after this though
https://www.youtube.com/playlist?list=PLW1OMpQZxu7wstVOlWx2NBFvCZDGkK2CH

If I had more time I'd do this tutorial and really get a good understanding of the backend side of things
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
