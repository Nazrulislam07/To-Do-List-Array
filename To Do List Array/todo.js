var todos = ["Do your loundry"];
var input = prompt("What would like to do?");

while(input !== "quit"){
	// handle input
	if(input === "list"){
		listTodo();
	}else if(input === "new"){
		addTodo();
	}else if(input === "delete"){
		deleteTodo();	
	}
	// ask again for new input
	input = prompt("What would like to do?");
}
console.log("Okay yor quit this App!");


function listTodo(){
	console.log("********")
		todos.forEach(function(todo, i){    //todo is placeholder of indivitual todos, ro you can say todo is holding every single todos value. todo just the name we gave up it could be anything
			console.log(i + ": " + todo);	// and 2nd argument i that refers of index again that could be name anything
		});
			console.log("********")	;
}


function addTodo(){
	//ask for new todo
		var newTodo = prompt("Make a new Todo");
		// add todos array
		todos.push(newTodo);
		console.log("Added Todo");
}

function deleteTodo(){
	// ask for index of todo to be deleted
		var index = prompt("What index would you like to delete?");
		// delete that todo
		//splice()
		todos.splice(index, 1);
		console.log("Deleted Todo");
}