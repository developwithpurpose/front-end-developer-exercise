One of the criteria for a successful pull request was that it would still be functional without
dynamic JavaScripting. You may notice that you cannot simply scroll through the different Baby Step
descriptions, this is because whenever JavaScript is NOT disabled, I dynamically set an element's scrollability to none, in order to allow for a cleaner experience. There is a more efficient way of accomplishing this, but in the favor of time, I decided to implement a more simple solution.

I have also added Babel to this project. I learned from my first attempt to be more mindful of using certain syntax and features, which aren't universally implement yet across all browsers.
