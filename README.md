# SYNOPSIS
A magical pipe chain

# DESCRIPTION
Pipe streams together with a more awesome syntax, like `a | b | c`

# MOTIVATION
Fun

# EXAMPLES
`pipechain` does not require `through`, i just like using through.

```js
var through = require('through')
require('pipechain').install()

var a = through(function(d) {
  this.queue(d.toString().toUpperCase())
})

var b = through(function(d) {
  this.queue(d.split('-').join(','))
})

var c = through(function(d) {
  this.queue(d.split(',').reverse().toString())
})

a | b | c

a.write('a-s-d-f') // OMG WTF? => F,D,S,A
```

# LESS MAGICAL

```js
var through = require('through')
var pipe = require('pipechain')

var a = pipe(through(function(d) {
  this.queue(d.toString().toUpperCase())
}))

var b = pipe(through(function(d) {
  this.queue(d.split('-').join(','))
}))

var c = pipe(through(function(d) {
  this.queue(d.split(',').reverse().toString())
}))


a | b | c

a.write('a-s-d-f') // OMG GTFO? => F,D,S,A
```
