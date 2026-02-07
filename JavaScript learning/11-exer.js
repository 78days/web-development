// function findsearch(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === "search") {
// 			return i;
// 		}
// 	}
// 	return -1;
// }
// console.log(findsearch(["hello", "world", "search"]));
function removeegg(foods) {
	foods1 = foods.splice();
	const newarr = [];
	let count = 0;

	for (let i = 0; i < foods.length; i++) {
		if (foods[i] === "egg" && count < 2) {
			count++;
			continue;
		} else {
			newarr.push(foods[i]);
		}
	}
	return newarr;
}
console.log(removeegg(["egg", "apple", "egg", "egg", "ham"]));
