module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return []
  }
  matrix.map((x, i) => i % 2 ? x.reverse() : x)
  const result = [].concat(...matrix)
  return result
}



