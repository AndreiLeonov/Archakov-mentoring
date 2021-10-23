let tasks = ['Выучить html/css', 'Выучить js', 'Выучить React'];

const ul = document.querySelector('#tasks-list');
const input = document.querySelector('#task-input');
const button = document.querySelector('#task-button');

const render = (tasks) => {
    ul.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const deleteTaskButton = document.createElement('button');
        deleteTaskButton.innerText = 'удалить';
        deleteTaskButton.onclick = () => handleClickRemove(index);

        li.innerText = task;
        li.appendChild(deleteTaskButton);

        ul.appendChild(li);
    });
};

const handleClickAdd = () => {
    const value = input.value.trim();
    if (value) {
        tasks.push(value);
        input.value = '';
        render(tasks);
    } else {
        alert('Вам необходимо вписать задачу для ее добавления');
    }
};

const handleClickRemove = (index) => {
    tasks = tasks.filter((el, i) => i !== index);
    render(tasks);
};

button.onclick = () => handleClickAdd();

render(tasks);