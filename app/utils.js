function handleRangeChangeForId(rangeId) {
  var rangeInput = document.getElementById(rangeId)
  var track = document.getElementById(rangeId + '_track')
  var numberInput = document.getElementById(rangeId + '_input')
  handleRange(rangeInput, numberInput, track)
}

function handleRange(rangeInput, numberInput, track) {
  var trackWidthInPercent = rangeInput.value * 100 / rangeInput.max
  numberInput.value = rangeInput.value
  track.style.width = trackWidthInPercent + "%"
}

function preventNonNumericInput(e) {
  var pressedKey = e.which;
  if (isNotADeleteKey(pressedKey) && isNotANumericKey(pressedKey)) {
    e.preventDefault();
  }
}

function isNotADeleteKey(pressedKey) {
  return pressedKey !== 8 && pressedKey !== 0
}

function isNotANumericKey(pressedKey) {
  return pressedKey < 48 || pressedKey > 57
}