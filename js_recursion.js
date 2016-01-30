range = function (start, end) {
  if (start === end) {
    return []
  }

  var x = range(start, end - 1);
  x.push(end - 1);
  return x
}

function sumRecurs(nums) {
  if (nums.length === 0) {
    return 0
  }

  var x = sumRecurs(nums.slice(1, nums.length))
  return x += nums[0]
}

console.log(sumRecurs([1,2,3,4,5,6]))

function sumIterat(nums) {
  var total = 0
  for (i = 0; i < nums.length; i++) {
    total += nums[i]
  }
  return total
}

console.log(sumIterat([1,2,3,4,5,6,7]))
