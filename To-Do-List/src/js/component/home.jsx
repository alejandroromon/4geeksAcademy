import React, { useState } from "react";


//create your first component
const Home = () => {
	const [todo, setTodo] = useState("");
	const [toDoList, setToDoList] = useState([]);

	function pasarTareas() {
		if(todo) {
			setToDoList((prevList) => [...prevList, todo]);
   			setTodo("")
		} else {
			alert("Escribe una tarea")
		};
	}

	const deleteTask=(tareas)=>{
		setToDoList(toDoList.filter(filtro => filtro !== tareas))
	  };

	return (
		<>
		<h1 className="text-center mt-5"> To Do </h1>
		<div className="text-center mt-5">
			<div>
				<div>
					<input value={todo} type="text" className="rounded" onChange={(e) => setTodo(e.target.value)}></input>
					<button type="button" className="btn btn-danger m-2" onClick={() => pasarTareas()}>Add</button>
				</div>
				<div className="text-center mt-5 d-flex justify-content-center">
					<ul id="ul" className="list-group">{toDoList.length == 0? <li className="list-group-item text-center">"No hay tareas, escribela y pulsa en "Add" para agregarlas a la lista"</li> : toDoList.map((tareas, i) => { 
						return(
						<li className="list-group-item" key={i} id={i}>{tareas}
							<span className="hide" onClick={() => deleteTask(tareas)}> <i class="fas fa-trash"></i></span>
						</li>)
					})}
					</ul>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;