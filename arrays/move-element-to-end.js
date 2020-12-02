function moveElementToEnd(array, toMove) {
  // Write your code here.
	const length = array.length;
	array.sort((a, b) => a - b);
	const firstIndex = array.indexOf(toMove);
	const lastIndex = array.lastIndexOf(toMove);
	const newArr = array.splice(firstIndex, lastIndex - firstIndex + 1);
	
	return array.concat(newArr);
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
