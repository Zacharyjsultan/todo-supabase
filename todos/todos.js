import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(todoForm);
    const todo = data.get('todo');
    

    await createTodo(todo);
    todos = await getTodos();
    todoForm.reset();

    await displayTodos();
});

// create todo state
let todos = [];

// add async complete todo handler function
async function handlerComplete(todo) {

    // call completeTodo
    await completeTodo(todo.id);
    // swap out todo in array
    todos = await getTodos();
    // call displayTodos
    displayTodos();
}
   

async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos, 
          // call render function, pass in state and complete handler function!
    for (let todo of todos) {
        const todoRender = renderTodo(todo, handlerComplete);
          // append to .todos
        todosEl.append(todoRender);
    }
}

// add page load function///////////////////////
async function pageLoad() {
    // fetch the todos and store in state
    todos = await getTodos();

    // call displayTodos
    displayTodos();
    
}
pageLoad();

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    await deleteAllTodos();
    // modify state to match
    todos = [];
    // re displayTodos
    displayTodos();
});
