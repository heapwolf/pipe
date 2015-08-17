var pipe = module.exports = function pipe(s) {

  var v = s.valueOf

  s.valueOf = function() {
    if (pipe.left) {
      pipe.left.pipe(this)
    }
    pipe.left = this
    return v.apply(s, arguments)
  }
  return s
}

pipe.install = function(proto) {
  pipe(proto || require('stream').prototype)
}
