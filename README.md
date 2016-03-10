# f-paper-spinner-fab [![Build Status](https://travis-ci.org/firmfirm/f-paper-spinner-fab.svg?branch=master)](https://travis-ci.org/firmfirm/f-paper-spinner-fab)

Combines [`<paper-spinner-lite>`](https://elements.polymer-project.org/elements/paper-spinner?active=paper-spinner-lite)
and [`<paper-fab>`](https://elements.polymer-project.org/elements/paper-fab).

  - Learn about element properties in [component page](https://firmfirm.github.io/f-paper-spinner-fab/).
  - Try out [live demo](https://firmfirm.github.io/f-paper-spinner-fab/components/f-paper-spinner-fab/demo/).

![Example](http://i.imgur.com/gYRK9wo.png)

## Installation
```bash
# Assuming Node.js and Bower are already installed
bower install --save zamok-auth
```

## Usage

Import element and (if needed) iconset
```html
<link rel="import" href="bower_components/iron-icons/iron-icons.html">
<link rel="import" href="bower_components/f-paper-spinner-fab/f-paper-spinner-fab.html">
```

Use it
```html
<f-paper-spinner-fab icon="cancel" active></f-paper-spinner-fab>
```

# Development

From here on, documentation will only concern development of this component.

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/f-paper-spinner-fab/`, where `f-paper-spinner-fab` is the name of the directory containing it.
