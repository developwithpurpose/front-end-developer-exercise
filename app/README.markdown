Document your submission here (optional, but recommended)

Front-end Code Challenge - Ramsey Solutions
By: Corey Owens
=============================================


Vertical Tab Animation
=====

I tried working on the animation for the Baby Steps, but was unable to get that to work properly. I'm confident that if I had more time to work on this I would be able to accomplish this part of the task. At my current role as a Web Developer for United Methodist Communications we have been learning about Sitecore at least once per Sprint (15 days) and put together a presentation of what we've learned. But with that said, I'm open to broadening my skillset.

JSON Items
====
I'm still learning how to use JSON and wasn't able to figure out how to pull in the babysteps value from the baby step key. If I had understood how to go about that, then creating the logic would have been no problem and move on to creating a switch for the various outputs for how many friends to show per baby step.


Stylesheets and Javascript
====
<!-- Bootstrap Installed -->
<!-- Boostrap Styling in Head -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<!-- Boostrap Javascript in Footer -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>


Markup
====
<!-- Using sprites and :active psuedo to change image color-->
<a class="nav-link active" id="v-pills-babtstep-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-babystep-1-tab" aria-selected="true">Baby Step 1<img id="step-1" src="assets/images/icons/sprites/icons_small.png"></a>
<a class="nav-link" id="v-pills-babystep-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-babystep-2-tab" aria-selected="false">Baby Step 2<img id="step-2" src="assets/images/icons/sprites/icons_small.png"></a>
<a class="nav-link" id="v-pills-babystep-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-babystep-3-tab" aria-selected="false">Baby Step 3<img id="step-3" src="assets/images/icons/sprites/icons_small.png"></a>
<a class="nav-link" id="v-pills-babystep-4-tab" data-toggle="pill" href="#v-pills-4" role="tab" aria-controls="v-pills-babystep-4-tab" aria-selected="false">Baby Step 4<img id="step-4" src="assets/images/icons/sprites/icons_small.png"></a>
<a class="nav-link" id="v-pills-babystep-5-tab" data-toggle="pill" href="#v-pills-5" role="tab" aria-controls="v-pills-babystep-5-tab" aria-selected="false">Baby Step 5<img id="step-5" src="assets/images/icons/sprites/icons_small.png"></a>
<a class="nav-link" id="v-pills-babystep-6-tab" data-toggle="pill" href="#v-pills-6" role="tab" aria-controls="v-pills-babystep-6-tab" aria-selected="false">Baby Step 6<img id="step-6" src="assets/images/icons/sprites/icons_small.png"></a>
<a class="nav-link" id="v-pills-babystep-7-tab" data-toggle="pill" href="#v-pills-7" role="tab" aria-controls="v-pills-babystep-7-tab" aria-selected="false">Baby Step 7<img id="step-7" src="assets/images/icons/sprites/icons_small.png"></a>

<!-- AJAX Call -->
<script src="assets/javascripts/main.js"></script>

