# Front-end Developer Exercise

Thanks for the opportunity!

## Libraries Used

- [jQuery](https://jquery.com/)

## Browser Information

This app was tested in the following browsers:

-   Firefox 56.0
-   Chrome 64.0
-   Safari 10.1.2


## Getting Started

```
npm install
npm start
```

### HTML

I used helper classes (active/hidden) and an 'id' to hide and show content.  

### CSS

Sass is being compiled via FileWatcher on Webstorm IDE.

I used SASS and incorporated variables for colors and fonts. As per requirements I used floats for IE9 compatibility. 

Animations are built in CSS and have -ms-transform flags for further IE support.

_Exceptions_ - The Nav Bar gradient is only available on IE versions 10+

### JS

I used jQuery for selecting DOM elements. I used the 'datatype' attribute to get the babystep number from the navigation.  This number is passed around in order to control the dynamic content and it's association with the 'ID' on each article.

The dynamic content is pulled from the provided JSON via an ajax call. This data is processed through a forEach method, compared against the baby step, and pushed into an array. Finally, it is rendered through a switch statement via template literals which are appended to the DOM via the jQuery .html method.  


Thank you for your time and consideration. Those four hours flew by.  


