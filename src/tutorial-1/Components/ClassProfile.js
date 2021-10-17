import React, {Component} from 'react';

class ClassProfile extends Component {

    static defaultProps = {
        name: "пользователь",
        date: new Date().toLocaleString('ru-RU', {
            year: 'numeric', month: 'long', day: 'numeric'
        }),
        title: "React-компонент",
    }

    render() {

        const { name, date, title } = this.props;

        return (
            <>
                <h1>{title}</h1>
                <h2>Привет, <b>{name}!</b></h2>
                <span>Дата регистрации: {date}</span>
            </>
        );
    }
}

export default ClassProfile;