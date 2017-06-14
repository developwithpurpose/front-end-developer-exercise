# Exercise Documentation

Submission by Josh Kennedy
[hello@joshkennedy.me](mailto:hello@joshkennedy.me)

## Objectives
- Successfully complete the requirements of the exercise by meeting all criteria

## Resources
- `SCSS` compiled with [CodeKit](https://codekitapp.com/)
- [Lodash](https://lodash.com)
- Vanilla JS compiled with CodeKit
- Included images, icons, and copy

## Layout
My initial thought was to build the page with separate sidebar and content areas. But, after thinking through a javascript fallback, it made more sense to built the tab functionality in a way that made no use of JS whatsoever. This presented a challenge for the animation of the content area itself, so to minimize some various visual impediments, I hooked into a `.BabySteps-animate` class, which allows the content to fade in and out while the tabs animate.

## Styling
I broke out the different bits of the layout according to their components or function. For a single-page document like this, it might be a wee bit overkill to have them broken out like I did, but it would make more sense in thinking towards scale. I really wanted to avoid using the shadow images, but I ran into cross-browser trouble when trying to get `box-shadow` elements displaying consistently. The only main discernable difference in IE 9 is the lack of animation on the tabs, since IE 9 doesn't support the `transition` property.

## Dynamic Content
I hadn't had an occasion to try out [Lodash](https://lodash.com/) yet, so I decided that the perfect time to do so would be on a developer exercise. Go big or go home, right?

Anyways, I managed to get the content displaying properly after figuring out how I wanted to chunk up the `JSON` data. With more time, I'd work on DRY-ing it out to make it more scalable. I was determined not to use jquery unless it was absolutely necessary, so I needed to brush up on my vanilla JS a bit.

The basic gist is on `lines 17-19` I'm declaring an array of users grouped by their Baby Steps. After that, in `lines 23-29` I define those groups and sort them by last name. The loop on `lines 31-80` determine how many people are in a given Baby Step group, and are `joined` to display their names accordingly (i.e. separated by an 'and' or a comma). Those names are then passed into a message, which tacks on the language for that particular grouping of people and their Baby Step. This is the part that I'd like to refactor, maybe storing the names in one shot somehow and passing them through to an auto-incrementing loop for each content section. `Lines 82-89` then passed the messages to the `HTML` for display on the front-end.
