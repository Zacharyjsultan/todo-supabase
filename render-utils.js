export function renderTodo(todo, handleComplete) {
    // create a div and a p tag

    const div = document.createElement('div');
    const p = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    div.classList.add(todo.complete ? 'complete' : 'incomplete');

    // add the 'todo' css class no matter what

    // put the todo's text into the p tag

    // append stuff

    // add event listener for click and call handleComplete function
    
    // return the div
}
