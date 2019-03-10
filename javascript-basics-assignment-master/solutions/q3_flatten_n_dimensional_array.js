/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
	return array.reduce(function(flat,toFlatten){
		return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	},[]);
	// Write your code here
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
