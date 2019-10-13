# Front-end Developer Exercise: Ryan Wells

Thank you in advance. This was a fun challenge! It touched on a lot of areas in subtle ways.  

Below is a breakdown of dependencies, environment, and development considerations. 

## Server Environments

Gulp has been added for task automation. To set up the environment, run: 
```sh
$ npm install 
```

### Production
The quickest way to view the latest production build in a browser is to run:
```sh
$ gulp serve-prod
```
This will launch an instance of your default browser and serve the site from http://localhost:8080/. 

To generate a production build, run:
```sh
$ gulp prod
```
The production build command regenerates the following structure:
```
front-end-developer-exercise
└── app
    └── build
        └── prod
            ├── baby-steps.json
            │   └──  dist
            │        ├── css
            │        │   ├── style.css
            │        │   └── maps
            │        ├── img
            │        └── js
            │            ├── main.js
            │            └── maps
            └── index.html
```

### Development
To run the development server and watch for changes, run:
```sh
$ gulp serve-dev
```
This will launch an instance of your default browser and serve the site from http://localhost:3000/. This server is configured for hot reloading. It's possible to run the dev and prod servers concurrently; however, only the development server is watching for changes. A production build would need to be run following the last development build. It is also possible to compile a development build without starting the server by running:
```sh
$ gulp dev
```
Running the development build command or making changes to the source files while the development server is running regenerates the following structure:
```
front-end-developer-exercise
└── app
    └── build
        └── dev
            ├── baby-steps.json
            │   └──  dist
            │        ├── css
            │        │   ├── style.css
            │        │   └── maps
            │        ├── img
            │        └── js
            │            ├── main.js
            │            └── maps
            └── index.html
```
Changes to files should be made from within the /src/ directory:
```
front-end-developer-exercise
└── src
    ├── css
    │   └── style.css
    ├── img
    ├── js
    │   └── main.js
    └── index.html
```

## Dependencies 

[normalize.css](https://necolas.github.io/normalize.css/) and Google Fonts are the only third-party libraries used for production. I probably could have saved time and achieved a little more uniform browser support by using jQuery/jQuery UI, but wanted to stick with vanilla JavaScript for this. The Sass and JavaScript source files are compiled using npm packages via Gulp.

## User Interface

### Layout
Flexbox (with vendor prefix fallbacks) was used for the layout. CSS floats needed to be added to prevent layout breakage in IE9. As per the suggestion in the requirements, the template is not responsive.

### Animations
The animations are CSS based. The content scroll behavior stops working in IE110 and 11, and 9. Also, in IE9, the animations do not work for the navigation. Aside from this, the page is still functional in these browsers. 

### Accessibility 
To meet the accessibility requirement, the [WCAG 2.0AA guidelines](https://www.w3.org/TR/WCAG20/) were referenced in various areas of the build:
* <strong>Text and color</strong> &ndash; I ensured all text was rendered as HTML instead of using images.
Some of the colors that were annotated in the mockup did not meet the color contrast requirements. As a result, I reduced the brightness until adequate contrast was achieved, while still trying to retain the hue of the original color. A few examples are the:
  - Left navigation links (default and on states) 
  - Blue 'Baby Step' content section headings 
  - Blue 'friends' hyperlinks
* <strong>Markup</strong> &ndash; Semantic HTML was used and ARIA roles were added were appropriate.
* <strong>Keyboard navigability</strong> &ndash; I took a little bit of a risk with providing an enhancement for users who may need to navigate with the keyboard. Once hyperlinks were added to the dynamic content for each content section (annotated within /resources/annotated-mockup.jpg), tabbing through the interface became problematic. My solution was to add scripting that detects tabbing. Once a user tabs, the page expands into a more traditional layout, thus enabling proper tabbing behavior. When the user uses the mouse to interact with the navigation menu, the layout returns to normal. 

### Noscript functionality
The page function without JavaScript; however, the left nav on-state background does not animate. 

### Editorial

I corrected a typo in the heading description for Baby Step 3: "3 to 6 months of <i>exepenses</i> in savings". I also added semantic quotation markup (along with related CSS styles) and replaced plain text hyphens with em-dashes, where appropriate. 

### Performance
* The use of external libraries was limited
* JavaScript and CSS files are cleaned and minified for production
* Sprites were used instead of individual icon images 
* The header background image already appeared to be optimized 


