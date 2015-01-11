# angular-hamburglar

### An angular hamburger button directive made of css and svg!
Quick Links:

*  [Demos](#demos)
*  [Installing](#installing)
*  [Usage](#usage)
*  [Credits](#credits)

## <a name="demos"></a> Demos
Without circle

![Without circle](https://cloud.githubusercontent.com/assets/6004537/5694007/11a507c0-9943-11e4-8f47-8bbc5987373a.gif)

With circle (v0.2.0)

![With circle](https://cloud.githubusercontent.com/assets/6004537/5693980/1fa2c138-9942-11e4-8f01-ed0a7fd12556.gif)

## <a name="installing"></a> Installing
#### Bower

use **bower** to install
Change to your project's root directory.

```bash

bower install angular-hamburglar

```

## <a name="usage"></a> Usage

```html

<hamburglar ng-class="{'opened' : isNavIconOpened}" scale="0.5"></hamburglar>

```

Add **opened** class to hamburglar to make it work!

### api
- **scale** - The size of the icon
- **color** - Any color you can think of!
- **speed** - The speed of the animation (500ms, 1s etc..)

## <a name="credits"></a> Credits

[Designed](https://dribbble.com/shots/1623679-Open-Close?list=following&offset=2&page=3) by [Creativedash](https://dribbble.com/teams/Creativedash)

[Coded](https://raygun.io/blog/2014/07/making-svg-html-burger-button/) by [Kyle Henwood](https://dribbble.com/kyleHenwood)
