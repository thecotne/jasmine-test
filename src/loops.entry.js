


export function forOfAndDestructuring(array) {
	for(let [index, item] of array.entries()) {
		console.log(index, item);
	}
}

