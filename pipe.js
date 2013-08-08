var pipe = module.exports = function pipe(chain) {

  chain = chain || []

  return function(s) {

    var v = s.valueOf

    s.valueOf = function() {
      if (chain.length) {
        chain[chain.length-1].pipe(s)
      }
      chain.push(s)
      return v.apply(s, arguments)
    }
    return s
  }
}
