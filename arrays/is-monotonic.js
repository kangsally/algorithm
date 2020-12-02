function isMonotonic(array) {
  // Write your code here.
	if(array.length === 0 || array.legnth === 1){
		return true;
	}
	
	let flow = 0;
	for(let i = 0; i < array.length -1; i++){
		let temp = flow;
		flow = array[i+1] - array[i] !== 0 ? array[i+1] - array[i] : flow;
		if(flow * temp < 0){
			return false;
		}
	}
	return true;
	
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
