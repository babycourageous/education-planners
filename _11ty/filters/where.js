module.exports = function (array, key, value) {
  return array.filter((item) => item.data[key] === value)
}
