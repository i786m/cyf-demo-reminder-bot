/**
 * Gets random element from provided array
 * @param {Array} array - An array of elements
 * @returns {*} - A random element from the array
 * @example
 * getRandomElementFrom(['a', 'b', 'c']); // 'a', 'b', or 'c'
 */
export function getRandomElementFrom(array) {
	return array[Math.floor(Math.random() * array.length)];
}
