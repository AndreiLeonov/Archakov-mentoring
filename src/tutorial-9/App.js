import React from 'react';
import avatar from './assets/img/avatar.png';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';

const noData = 'Нет данных';

const App = () => {

    const [inputValue, setInputValue] = React.useState('');
    const [data, setData] = React.useState({});
    const [wasSearch, setWasSearch] = React.useState(false);
    const [isLoading, setIsloading] = React.useState(false);
    const url = `https://api.github.com/users/${inputValue}`;

    const getInfo = async () => {
        setWasSearch(true);
        setIsloading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setData({});
            alert('Пользователь не найден. Скорректируйте запрос.')
        }
        setIsloading(false);
    }

    const onChangeInputValue = (event) => {
        setInputValue(event.target.value);
    }

    console.log(data);

    return (
        <div className="app-container">
            <div className="app-form">
                {isLoading && <LinearProgress />}
                <input value={inputValue} onChange={onChangeInputValue} type="text" className="app-input" placeholder="Укажите GitHub-аккаунт"/>
                <button onClick={getInfo} className={isLoading ? "app-form_btn_disabled" : "app-form_btn"} disabled={isLoading}>Найти</button>
            </div>
            {Object.keys(data).length > 0
                ? <div className="app-user">
                    <div className="app-user_info">
                        <div className="app-user_image">
                            <img src={data?.avatar_url || avatar} alt="avatar"/>
                        </div>
                        <div className="app-user_data">
                            <h1 className="app-user_name">
                                {data.name ?? noData}
                                <span>{data.login ?? noData}</span>
                            </h1>
                            <p className="app-user_about">
                                {data.bio ?? noData}
                            </p>
                        </div>
                    </div>
                    <ul className="app-user_stats">
                        <li className="app-user_stats-item">
                            Репозитории:&nbsp;
                            <span>{data.public_repos ?? '0'}</span>
                        </li>
                        <li className="app-user_stats-item">
                            Подписчиков:&nbsp;
                            <span>{data.followers ?? '0'}</span>
                        </li>
                        <li className="app-user_stats-item">
                            Отслеживает:&nbsp;
                            <span>{data.following ?? '0'}</span>
                        </li>
                    </ul>
                    <ul className="app-user_location">
                        <li className="app-user_location-item">{data.location ?? noData}</li>
                        <li className="app-user_location-item">
                            <a href={data.blog}>{data.blog || null}</a>
                        </li>
                    </ul>
                </div>
                : wasSearch
                    ? <div className="app-user">
                        <div className="app-user_info">
                            <h2>информация о пользователе не найдена</h2>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
};

export default App;