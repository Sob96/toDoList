//Получение элементов DOM
const task = document.getElementById('task');
const CONTAINER = document.getElementById('container');
const button = document.getElementById('button');



//Основная ф-ция

function addTask() {
    //формирование задания
    const divTask = document.createElement('div');
    divTask.classList.add('taskDiv');
    CONTAINER.appendChild(divTask);
    const divTaskCheckbox = document.createElement('input');
    divTaskCheckbox.setAttribute('type', 'checkbox');
    divTaskCheckbox.setAttribute('id', 'checkbox');
    divTask.appendChild(divTaskCheckbox);
    const divTaskText = document.createElement('span');
    divTaskText.innerText = task.value;
    divTaskText.classList.add('taskText');
    divTask.appendChild(divTaskText);
    const divTaskChange = document.createElement('button');
    divTaskChange.classList.add('divTaskChange');
    divTaskChange.innerText = 'edit';
    divTask.appendChild(divTaskChange);
    task.value = null;

    //зачеркивание выполненного задания
    divTaskCheckbox.addEventListener('click', function () {
        divTaskText.classList.toggle('checked');
    });

    //редактирование задания
    divTaskChange.addEventListener('click', function () {
        const change = prompt('', divTaskText.innerText);
        if (change == null) {
            divTaskText.innerText = divTaskText.innerText;
        } else {
            divTaskText.innerText = change;
        }
    });


    //удаление задания
    button.addEventListener('click', function () {
    while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
    }
        
    });

}

//добавление задания
task.addEventListener('keypress', function (event) {
    if (event.key == 'Enter' && task.value !== '') {
        addTask()
    }
})






   






