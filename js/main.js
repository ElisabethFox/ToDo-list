const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value

    const taskHTML = `
                <li class="list-group-item d-flex justify-content-between task-item">
                    <span class="task-title">${taskText}</span>
                    <div class="task-item__buttons">
                        <button type="button" data-action="done" class="btn-action">
                            <img src="./img/tick.svg" alt="Done" width="18" height="18">
                        </button>
                        <button type="button" data-action="delete" class="btn-action">
                            <img src="./img/cross.svg" alt="Done" width="18" height="18">
                        </button>
                    </div>
                </li>`

    tasksList.insertAdjacentHTML('beforeend', taskHTML);
    taskInput.value = "";
    taskInput.focus();

    if (tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}

function deleteTask(event) {
    if (event.target.dataset.action !== 'delete') return;

    const parentNode = event.target.closest('.list-group-item');
    parentNode.remove();

    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }   
}

function doneTask(event) {
    if (event.target.dataset.action !== 'done') return;
    
    const parentNode = event.target.closest('.list-group-item');
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done');
}
