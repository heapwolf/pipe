# SYNOPSIS
A magical pipe chain

# DESCRIPTION
Pipe streams together with a more awesome syntax, like `a | b | c | pipe(process.stdout)`

# MOTIVATION
A hangover

```js
var through = require('through')
var pipe = require('pipechain')()

var a = pipe(through(function(d) {
  this.queue(d.toString().toUpperCase())
}))

var b = pipe(through(function(d) {
  this.queue(d.split('-').join(','))
}))

var c = pipe(through(function(d) {
  this.queue(d.split(',').reverse().toString())
}))


a | b | c | pipe(process.stdout)

a.write('a-s-d-f') // OMG WTF? => F,D,S,A
```