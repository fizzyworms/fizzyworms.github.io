const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const ulTodo = document.getElementById("ulTodo");

let todos = [];

function saveTodos() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function removeTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function printTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const btn = document.createElement("button");
  btn.innerText = "X";
  li.appendChild(span);
  li.appendChild(btn);
  ulTodo.appendChild(li);
  btn.addEventListener("click", removeTodo);
}

function submitTodo(event) {
  event.preventDefault();
  const todo = todoInput.value;
  const todoObj = {
    text: todo,
    id: Date.now(),
  };
  todoInput.value = "";
  todos.push(todoObj);
  printTodo(todoObj);
  saveTodos();
}

todoForm.addEventListener("submit", submitTodo);

const savedTodos = localStorage.getItem("todo");
console.log(savedTodos);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(printTodo);
}
