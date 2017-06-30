# hex-contrast-color

Javascript utility for getting a contrasting hex color string (`#ffffff` or `#000000`) based on a supplied hex color string.

The function accepts full 6 character strings and 3 character shorthand strings.
Returns null if supplied value is not a correct hex color string.

## Node

### Install

```
npm install --save hex-contrast-color
```

```javascript
var hexContrastColor = require('hex-contrast-color');

hexContrastColor('#000000')
> '#ffffff'
hexContrastColor('#ffffff')
> '#000000'
hexContrastColor('#f00')
> '#ffffff'

// Returns null if supplied value is not a correct hex color string
hexContrastColor(123);
> null
hexContrastColor(null);
> null
```
