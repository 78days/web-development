const todo = [];
function addtodo() {
	const inoutele = document.querySelector(".js-name-input").value;
	todo.push(inoutele);
	console.log(todo);
	document.querySelector(".js-name-input").value = "";
}
