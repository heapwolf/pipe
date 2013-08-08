var pipe = module.exports = function pipe(s) {

  var v = s.valueOf

  s.valueOf = function() {
    if (pipe.left) {
      pipe.left.pipe(s)
      pipe.left = null
    }
    pipe.left = s
    return v.apply(s, arguments)
  }
  return s
}
