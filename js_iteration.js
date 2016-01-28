Array.prototype.bubbleSort = function() {
  var isSorted = false
  while (!isSorted) {
    isSorted = true
    for (i = 0; i < this.length - 1; i++) {
        if (this[i] > this[i + 1]) {
          var x = this[i]
          this[i] = this[i + 1]
          this[i + 1] = x

          isSorted = false
      }
    }
  }

  return this
}

console.log([5, 3, 4, 2, 1].bubbleSort());

String.prototype.substrings = function() {
  var substrings = []
    for (i = 0; i < this.length; i++) {
      for (j = i + 1; j < this.length + 1; j++) {
        // if (substrings.indexOf(this.substring(i, j) === -1)
        //    ^^^To check if repeats in "substrings" output
        //       Doesn't work though...
          substrings.push(this.substring(i, j))

      }
    }

  return substrings
}

console.log("abc".substrings());
