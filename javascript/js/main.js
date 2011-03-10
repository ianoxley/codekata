// main.js
// -------

function chop(target, data) {
  if (data.length < 1) {
    return -1;
  }

  if (data.length == 1) {
    return (target == data[0]) ? 0 : -1;
  }

  var pivot = parseInt(data.length / 2);
  console.log(pivot);
  if (data[pivot] == target) {
    return pivot;
  } else {
    if (target < data[pivot]) {
      return chop(target, data.slice(0, pivot));
    } else {
			var tmpPivot = chop(target, data.slice(pivot));
			if (tmpPivot === -1) {
				return -1;
			}
			return (tmpPivot > 0) ? pivot + tmpPivot : pivot + 1;
    }
  }

  return false;
}

$(document).ready(function() {

  test("chop", function() {
    equals(chop(3, []), -1);
    equals(chop(3, [1]), -1);
    equals(chop(1, [1]), 0);

    equals(chop(1, [1, 3, 5]), 0);
    equals(chop(3, [1, 3, 5]), 1);
    equals(chop(5, [1, 3, 5]), 2);
    equals(chop(0, [1, 3, 5]), -1);
    equals(chop(2, [1, 3, 5]), -1);
    equals(chop(4, [1, 3, 5]), -1);
    equals(chop(6, [1, 3, 5]), -1);

    equals(chop(1, [1, 3, 5, 7]), 0);
    equals(chop(3, [1, 3, 5, 7]), 1);
    equals(chop(5, [1, 3, 5, 7]), 2);
    equals(chop(7, [1, 3, 5, 7]), 3);
    equals(chop(0, [1, 3, 5, 7]), -1);
    equals(chop(2, [1, 3, 5, 7]), -1);
    equals(chop(4, [1, 3, 5, 7]), -1);
    equals(chop(6, [1, 3, 5, 7]), -1);
    equals(chop(8, [1, 3, 5, 7]), -1);
  });
});
