# Dave Ramsey

Install Jade on your local machine
```bash
$ npm install jade -g
```

Install Sass on your local machine
```bash
$ npm install node-sass
```

Start the server with...
```bash
/code/front-end-developer-exercise
$ npm start
```

Compile Jade Template into index.html
```bash
/code/front-end-developer-exercise/app
$ jade -wP templates/index.jade -o ./
```

Command for compiling Sass into main.css
```bash
/code/front-end-developer-exercise/app
$ sass --watch assets/stylesheets/index.sass:index.css
```

__Notes:__

  - I started by creating the markup and copy in a boilerplate index.jade file.

  - Then I realized that getting pixel perfect alignment meant sticking to the
    pixel ratios from a photo. I'm able to do this with a chrome extension
    called PerfectPixel. But even then it's not perfect.

  - I placed a div in the top right corner as an example. it's hidden in the
    stylesheet by default though.

  - Maybe this goes a bit against the grain, but I decided, given the requirements
    specifying that this should be "usable without javascript" to instead code
    the entire mockup with only html and css (using my preprocessors of choice.)

