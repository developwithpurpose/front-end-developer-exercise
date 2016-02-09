README
======

Design Deviations
-----------------
-CSS3 transitions gracefully degrade in ie9. The transitions do not function in ie9, but I feel this does not have a negative impact on user experience.

-If javascript is blocked by a user, no active state is set for any tab link. Since javascript is required to change the active state, I elected to leave it out completely when js is blocked. The major functionality of the tabbed container is preserved though.

-I opted for a fade animation on the tabbed content transitions because I like quick animations that aren't distracting for users.

-I created my own spritesheet to reduce filesize and http requests

-Print styles were included at the bottom of the main stylesheet


