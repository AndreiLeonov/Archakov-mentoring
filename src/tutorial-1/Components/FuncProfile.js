import React from 'react';

const FuncProfile = (props) => {

    const {
        name = "пользователь",
        date = new Date().toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' }),
        title = "React-компонент"
    } = props;

    return (
        <>
            <h1>{title}</h1>
            <h2>Привет, <b>{name}!</b></h2>
            <span>Дата регистрации: {date}</span>
        </>
    );
};

export default FuncProfile;