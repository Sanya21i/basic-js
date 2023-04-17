const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrayCat) {
	let count = 0;
	let array = [];
	for (let i = 0; i < arrayCat.length; i++){
		array.push(arrayCat[i].filter(val => val === '^^'))
	}
	return array.flat().length||0
}

module.exports = {
  countCats
};
