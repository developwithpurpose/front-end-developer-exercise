# Front-end Developer Exercise

Copyright © 2014 Lampo Licensing, LLC. All rights reserved.

## Objective

Build a web page that will provide information about The 7 Baby Steps.

## Usage

Open _Terminal_ (macOS) or _Command Prompt_ (Windows) to the root of the project.

Type the following to install package dependencies:

```
npm i
```

To run the development environment:

```
npm run dev
```

This will automatically launch your default browser, watch for changes in the source files and update the browser automatically. Source files are located under `./src` directory.

I included this step for faster development as it allowed me to just concentrate on building the website and not have to switch to the browser and refresh it manually on every change.

To create the production files (JavaScript and CSS):

```
npm run build
```

This will create a minified and uglyfied JavaScript bundle under `./app/assets/javascripts` directory and create a minified and auto-prefixed CSS file under `./app/assets/stylesheets` directory.

Finally, to run the production app:

```
npm start
```

As per the requirements, this command will be run to test the site.

**_Note_**: The project already has a production version of the assets, so by running the previous command you will be running the production website.

## Technical Decisions

Development was done with modern JavaScript (ES6+) that is being transpiled to ES5 through Babel for production.

I included four tiny polyfill JavaScript files for backwards compatibility with older browsers, given that one of the requirements was to support all the way back to IE9. The intent is to remove them when the time comes to sunset support for older browsers. Included polyfills are:

- `polyfill-classList.js` - Adds support for `Element.classList` to IE9 and IE10. Can be removed when we stop supporting these browsers.
- `polyfill-dataset.js` - Adds support for `Element.dataset` to IE9 and IE10. Can be removed when we stop supporting these browsers.
- `polyfill-foreach` - Adds support for `NodeList.prototype.forEach()` to IE9, IE10 and IE11. Can be removed when we stop supporting these browsers.
- `promise-polyfill` - Adds support fot `Promises` to IE9, IE10 and IE11. Can be removed when we stop supporting these browsers. I am using [Axios](https://github.com/axios/axios), which is a promise based HTTP client, to make AJAX requests and read `baby-steps.json`.

I am also including an IE9 specific CSS file to replace Flexbox rules with `float`s for backwards compatibility and a few more rules. This can also be removed when we stop supporting IE9.

According to [Net Market Share](https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22browserVersion%22%3A%7B%22%24in%22%3A%5B%22Internet%20Explorer%209%22%2C%22Internet%20Explorer%2010%22%2C%22Chrome%22%2C%22Firefox%22%2C%22Safari%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222017-08%22%2C%22dateEnd%22%3A%222018-07%22%2C%22segments%22%3A%22-1000%22%7D), IE9 and IE10, their usage is 0.59% when compared to other major browsers.

## Future Enhancements

- Detect older browsers via JavaScript and inject polyfills to users using these browsers, as opposed to having all users download them.
- Do a little more research and have the tabs work without any JavaScript.

### Final words

Thank you for the opportunity to work on this exercise and to interview at Ramsey Solutions. I look forward to hearing back from you and receiving some constructive feedback regarding the exercise.

-Esau
