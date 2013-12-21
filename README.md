[![build-status](https://www.codeship.io/projects/45c20710-4c8c-0131-15d5-5a8cd3f550f8/status)](https://www.codeship.io/projects/11261)

# SYNOPSIS
Magical pipes

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

a | b | c | process.stdout

a.write('a-s-d-f') // OMG WTF? => F,D,S,A
```
