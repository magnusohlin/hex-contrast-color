var assert = require('chai').assert
var hexContrastColor = require('../index.js')

var black = '#000000'
var white = '#ffffff'
var shorthandRed = '#f00'
var darkGray = '#535c62'
var mediumBlue = '#259af4'
var lightYellow = '#f9e785'

describe('Hex color contrast', function () {
  it('should have an evaluate function', function () {
    assert.isFunction(hexContrastColor)
  })

  it('should return null if supplied value is not a hex string', function () {
    var number = 123
    var string = 'foo'
    var bool = true
    var nullValue = null
    assert.equal(null, hexContrastColor())
    assert.equal(null, hexContrastColor(number))
    assert.equal(null, hexContrastColor(string))
    assert.equal(null, hexContrastColor(bool))
    assert.equal(null, hexContrastColor(nullValue))
  })

  it('should return null if supplied value is not a correct hex value for color', function () {
    var wrongColor = '#foo'
    var shortColor = '#ba'
    assert.equal(null, hexContrastColor(wrongColor))
    assert.equal(null, hexContrastColor(shortColor))
  })

  it('should return hex color for white if supplied with black', function () {
    assert.equal(white, hexContrastColor(black))
  })

  it('should return hex color for black if supplied with white', function () {
    assert.equal(black, hexContrastColor(white))
  })

  it('should return hex color for white if supplied with shorthand red', function () {
    assert.equal(white, hexContrastColor(shorthandRed))
  })

  it('should return hex color for white if supplied with dark gray', function () {
    assert.equal(white, hexContrastColor(darkGray))
  })

  it('should return hex color for white if supplied with medium blue', function () {
    assert.equal(white, hexContrastColor(mediumBlue))
  })

  it('should return hex color for black if supplied with light yellow', function () {
    assert.equal(black, hexContrastColor(lightYellow))
  })
})