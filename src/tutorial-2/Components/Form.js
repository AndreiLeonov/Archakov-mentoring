import React from 'react';

const Form = () => {

    let email = '';
    let password = '';

    const inputHandler = (event) => {

        let value = event.target.value;
        let name = event.target.name;

        if (name === 'password') {
            password = value.trim();
        };

        if (name === 'email') {
            email = value.trim();
        };

    };

    const submitHandler = (event) => {

        event.preventDefault();

        if (email && password) {
            console.log({ email, password });
            email = ''
            password = ''
            event.target.reset()
        } else {
            alert('Заполните поля');
        }
    };

    return (
        <form
            onSubmit={submitHandler}
        >
            <input
                type="email"
                onChange={inputHandler}
                placeholder="введите почту"
                name="email"
            />
            <input
                type="password"
                onChange={inputHandler}
                placeholder="введите пароль"
                name="password"
            />
            <button type="submit">Войти</button>
        </form>
    );
};

export default Form;