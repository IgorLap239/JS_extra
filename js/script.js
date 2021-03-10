'use strict';


const userName = document.getElementById('username'),
    regBtn = document.getElementById('registerUser'),
    usersList = document.getElementById('list'),
    authBtn = document.getElementById('login');

let usersData = [

];
let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

if (JSON.parse(localStorage.getItem('usersDataSave')) !== null) {
    usersData = JSON.parse(localStorage.getItem('usersDataSave'));
} else {
    localStorage.removeItem('usersDataSave');
}

const render = function() {
    usersList.textContent = '';
    localStorage.usersDataSave = JSON.stringify(usersData);

    usersData.forEach(function(item) {

        const li = document.createElement('li');
        li.classList.add('user-item');
        li.style.listStyleType = 'none';
        li.innerHTML = `<span class="user-text">Имя: ${item.name}, Фамилия: ${item.surname}, зарегестрирован: ${item.date}</span>
            <button class="user-remove">Удалить</button>`;

        usersList.append(li);

        const btnUserRemove = li.querySelector('.user-remove');
        btnUserRemove.addEventListener('click', function() {
            let number = usersData.indexOf(item, 0);
            usersData.splice(number, 1);
            li.remove();
            localStorage.usersDataSave = JSON.stringify(usersData);
        });

    });
};

regBtn.addEventListener('click', function(event) {
    let userName = prompt('Введите свои имя и фамилию через пробел');
    let userArray = userName.split(' ');
    if (userArray.length !== 2) {
        alert("Некорректный формат данных");
        return;
    }
    let userLog = prompt('Придумайте логин'),
        userPass = prompt('Придумайте пароль'),
        date = new Date(),
        dateStr = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} г., ${date.toLocaleTimeString()}`;

    const newUser = {
        name: userName.split(' ')[0],
        surname: userName.split(' ')[1],
        login: userLog,
        password: userPass,
        date: dateStr
    };

    usersData.push(newUser);

    render();
});

authBtn.addEventListener('click', function(event) {
    let userLog = prompt('Введите логин'),
        count = 0;

    usersData.some(item => {
        count += 1;
        if (count <= usersData.length) {
            if (item.login !== userLog) {
                return;
            } else {
                let userPass = prompt('Введите пароль');
                if (item.password === userPass) {
                    userName.innerText = item.name;
                    count += 1;
                } else {
                    return alert('Вы ввели неверный пароль!');
                }
            }
        } else {
            return alert('Пользователя с таким логином не существует!');
        }
    });

});

render();