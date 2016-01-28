Array.prototype.uniq = function () {
  var output_arr = [];
  for (i = 0; i < this.length; i++) {
    if (output_arr.indexOf(this[i]) === -1){
      output_arr.push(this[i])
    }
  }
  return output_arr
}

// var uniq = new function(arr) {
//   var out = []
//   for (i = 0; i < arr.length; i++) {
//     if (out.inArray(arr[i], out)
//   }
// }

Array.prototype.twoSum = function () {
  var output = []
  for (i = 0; i < this.length; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        output.push([this[i], this[j]])
      }
    }
  }
  return output
}

Array.prototype.transpose = function() {
  var output = []
  for (i = 0; i < this.length; i++) {
    output.push([])
  }
  for (i = 0; i < this.length; i++) {
    for (j = 0; j < this.length; j++) {
      output[i].push(this[j][i])
    }
  }
  return output
}

console.log([1,2,3,4,5,1,2].uniq())
console.log('test')
console.log([-1, 0, 2, -2, 1].twoSum())
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());





var NUMS = [1, 2, 3, 4, 5];

Array.prototype.my_each = function() {
  var output = []
  for (i = 0; i < this.length; i++) {
    output.push(this[i] * 2)
  }
  return output
}

Array.prototype.myEach = function (func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }

  return this;
};

NUMS.myEach(function (num) {
  console.log("square of " + num + " is " + (num * num));
});

Array.prototype.myMap = function (func) {
  var mappedArray = [];

  this.myEach(function (element) {
    mappedArray.push()
  }
}
