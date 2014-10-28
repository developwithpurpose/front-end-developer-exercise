# Front-end Developer Exercise - Implementation

The [original instructions have been moved](INSTRUCTIONS.md).

## What I did

What I still need to work on:

* It doesn't function in IE 7 or IE 8. This was not an accident but a
  conscious decision. I traded mobile support for older browser support.
* I have a layout bug in IE 11 that I didn't chase down.
* I chose not to add the drop shadow around the perimeter of the page

Highlights:

* Use a [configuration management tool](http://saltstack.com) and
  [Vagrant](http://vagrantup.com) to make a development environment.
* Used the [Foundation front-end framework](http://foundation.zurb.com)
  to get mobile device support and a starting point for annoying things
  like grids.
* Used [Bower](http://bower.io) for some of the web dependencies.
* Used [Browserify](http://browserify.org) to create bundles from the
  JavaScript source.
* Used [React](http://facebook.github.io/react/) to make components for
  some things.
* Used [Google Fonts](https://www.google.com/fonts) for the typography and this eliminated the need to
  use images except.
* Used a [web font plugin](https://github.com/sapegin/grunt-webfont) to
  handle the iconography instead of images.
* Switched Jasmine out for [Testem](https://github.com/airportyh/testem)
  because I so thoroughly enjoy using it.

## Using Vagrant to setup a development environment

While the instructions provided an easy way to get up and running I
wanted to further expand upon the idea of "get developing quickly".

To this end my implementation uses [Vagrant](http://vagrantup.com).
Install that first and make sure that you also install a provider like
[VirtualBox](https://www.virtualbox.org).

Start with a clone.

```shell
git clone https://github.com/robmadole/front-end-developer-exercise.git
```

Launch Vagrant and give it time to install everything listed in the Salt
states.

```shell
cd front-end-developer-exercise
vagrant up
```

This can take a while so be patient (about 5 minutes on my MacBook Pro).
Also keep an eye on the section that talks about "Forwarding ports". If
you have something else listening on these ports already Vagrant will
try and use another one.  You may need to adjust the port numbers in the
rest of this README if it does.

## See the results

After Vagrant finishes your environment should be completely tooled up
to work.

Jump into the environment first and change directories to where all the
goodies are.

```shell
vagrant ssh
cd /exercise
```

Run `grunt` so we can see the results. The `default` task will build the
JavaScript, CSS, and web font files needed. It will also launch a
watcher that rebuilds any source file if necessary should you change it.

```shell
grunt
```

Grunt will launch a static server using connect on port 9001 - unless
Vagrant had to change that.

From your _host computer_ launch [http://localhost:9001/app](http://localhost:9001/app).

## Changing the Baby Step that our user is on

In `app/data` there is a JSON file - `me.json` - which represents the
current user's Baby Step.

This is used to determine which step shows the friends who are also in
the same step as our user.

Simply change the value in this file and refresh the browser to see it
work.

If you change it to this:

```javascript
{
  "babyStep": 2
}
```

You'll see "Paul Taylor is also in Baby Step 2" at the bottom of that
step.

## See the tests

I used [Testem](https://github.com/airportyh/testem) and a nice [Grunt
plugin](https://www.npmjs.org/package/grunt-contrib-testem) to make it
easy to integrate.

For this to work you need to leave `grunt` running. Open another
terminal so that you can have Grunt's watch task going while you also
have the test runner up.

To get the test runner going (make sure you are inside of Vagrant).

```shell
grunt testrunner
```

From your _host computer_ launch
[http://localhost:7357](http://localhost:7357).
