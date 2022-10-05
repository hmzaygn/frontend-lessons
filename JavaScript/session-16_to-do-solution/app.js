//* ======================================================
//*                     TODO APP
//* ======================================================

//?Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");

let todos = JSON.parse(localStorage.getItem("TODOS")) || [];

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("PLease enter new todo");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
    };

    //! yeni bir li elementi olusturup bunu DOM'a bas
    createListElement(newTodo);

    todos.push(newTodo);
    localStorage.setItem("TODOS", JSON.stringify(todos));

    todoInput.value = "";
  }
});

const createListElement = (newTodo) => {
  const { id, completed, text } = newTodo; //!destr.

  //? yeni bir li elementi olustur ve bu elemente obje icerisindeki
  //? id degerini ve completed class'ini ata
  const li = document.createElement("li");
  // li.id = newTodo.id;
  li.setAttribute("id", id);

  // newTodo.completed ? li.classList.add("completed") : "";
  completed && li.classList.add("checked");

  //? okey ikonu olustur ve li elementine bagla
  const okIcon = document.createElement("i");
  okIcon.setAttribute("class", "fas fa-check");
  li.appendChild(okIcon);

  //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const p = document.createElement("p");
  const pTextNode = document.createTextNode(text);
  p.appendChild(pTextNode);
  li.appendChild(p);

  //? delete ikonu olustur ve li elementine bagla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  console.log(li);
  //? meydana gelen li elementini ul'ye child olarak ata
  todoUl.appendChild(li);
};

const renderSavedTodos = () => {
  todos.forEach((todo) => {
    createListElement(todo);
  });
};

renderSavedTodos();

todoUl.addEventListener("click", (e) => {
  const id = e.target.parentElement.getAttribute("id");

  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();

    todos = todos.filter((todo) => todo.id != id);
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
  }
});

//? Enter tusu ile ekleme mumkun olsun
todoInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addBtn.click();
  }
});

//? Baslangicta input aktif olsun
window.onload = function () {
  todoInput.focus();
};
