import React from 'react';

const FuncProfile = ({ name = "пользователь", date = new Date(), title = "React-компонент" }) => {

    return (
        <>
            <h1>{title}</h1>
            <h2>Привет, <b>{name}!</b></h2>
            <span>Дата регистрации: {date}</span>
        </>
    );
};

export default FuncProfile;