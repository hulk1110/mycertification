/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {
    // Write your code here
     let result = [];
	for(let i = 0; i < height; i++) {
		let spaces = " ".repeat(height - i);
		let block = "*".repeat(i * 2 + 1);
		result.push(`${spaces}${block}${spaces}`);
	}
     return result.join("\n");
     
     
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
