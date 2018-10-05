# notes from mockup
Font sizes needed
1. 50px - h1 for main title
1. 32px - h2 for heading above main title
1. 30px - h3 for baby step title
1. 18px - h5 for baby step subtitle and nav item text
1. 13px - p tags

- will need css class to make some text blue (#36abe1)
- friends names colored blue (#6fbee7)
- header section padding 70px width 50px height
- header section bottom margin 60px
- body will need margin and grey background to create inset white box for content


# Implementation

## Structure
Backbone of the DOM structure comes from html in index.html. Animation is currently handled by the css scroll-behavior property (only works in firefox by default, is an experiemental feature in chrome and opera). A jquery animation can be written with more time that copies this behavior and works in more browsers. If javascript is disabled however this behavior can still be the events default behavior for browsers that support it. 

Javascript is used to generate the message in the user story for showing which friends are on a given step, and to make the navbar toggle classes on click.

## Functions written for app

getFriends
```
Arguments - None
Returns - Promise for friends
```

getFriendName
```
Arguments - friend: friend object
Returns - string: friends full name in a anchor tag
```

generateFriendString
```
Arguments - friendsArray: array of friend objects, currentSte: integer of current baby step
Returns - string: string telling which friends are on that baby step
```

appendFriendInfo
```
Arguments - string: the string to append, step: integer of step to append string to
Returns - nothing: this method appends string to the DOM.
```

onNavClick
```
Arguments - event: the event that fired the function
Returns - nothing: this method deals with changing classes on nav items for styling
```