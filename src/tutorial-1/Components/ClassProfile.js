import React, {Component} from 'react';

class ClassProfile extends Component {
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