var through = require('through')
var pipe = require('./pipe')
var assert = require('assert')

var a = pipe(through(function(d) {
  this.queue(d.toString().toUpperCase())
}))

var b = pipe(through(function(d) {
  this.queue(d.split('-').join(','))
}))

var c = pipe(through(function(d) {
  this.queue(d.split(',').reverse().toString())
}))

var d = through(function(d) {
  assert.equal(d, 'F,D,S,A')
  this.queue(d)
})

a | b | c | pipe(process.stdout)

a.write('a-s-d-f') // => F,D,S,A

// and now for the real magic sauce

pipe.install()

var a = through(function(d) {
  this.queue(d.toString().toUpperCase())
})

var b = through(function(d) {
  this.queue(d.split('-').join(','))
})

var c = through(function(d) {
  this.queue(d.split(',').reverse().toString())
})

var d = through(function(d) {
  assert.equal(d, 'F,D,S,A')
  this.queue(d)
})

a + b + c + process.stdout

a.write('a-s-d-f')


