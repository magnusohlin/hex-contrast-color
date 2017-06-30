// Credit to Tim Down: https://stackoverflow.com/users/96100/tim-down
// https://stackoverflow.com/a/5624139/1182348
function hexColorToRgb (hexColor) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hexColor = hexColor.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

var textContrastColor = function (hexColor) {
  if (typeof hexColor !== 'string') {
    return null
  }
  var colorValues = hexColorToRgb(hexColor)
  if (colorValues !== null) {
    var contrastColor = colorValues.r * 0.299 + colorValues.g * 0.587 + colorValues.b * 0.114 > 186
      ? '#000000'
      : '#ffffff'
    return contrastColor
  } else {
    return null
  }
}

module.exports = textContrastColor
