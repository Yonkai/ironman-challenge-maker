// filters out non-unique names
function uniq (a) {
  var seen = {}
  return a.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true)
  })
}
