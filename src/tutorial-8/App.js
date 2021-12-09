import React from 'react';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';
import axios from 'axios';

const App = () => {
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const errorMessage = 'Произошла ошибка! повторите попытку позже';
    const url = 'https://61aca2a9d228a9001703ab6c.mockapi.io/users';

    const getUsers = async () => {
        // try {
        //     const response = await fetch(url);
        //     const result = await response.json();
        //     if (result && result !== 'Not found') {
        //         setUsers(result)
        //     } else {
        //         setError(errorMessage);
        //         throw new Error(errorMessage);
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
        const { data } = await axios.get(url);
        setUsers(data);
    };

    const uploadFile = async () => {
        const fileElement = document.querySelector('#file');
        const file = fileElement.files[0];

        setIsLoading(true);

        const formData = new FormData();
        formData.append('file', file);

        await axios.post('http://localhost:9999', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });

        setIsLoading(false);
    }

    return (
        <div>
            {users.length > 0 && (
                users
                    ?.map((user,index) => (
                        <div key={user?.id}>
                            {index + 1}. {user?.name}
                        </div>
                    )))}
            <Button onClick={getUsers} variant="contained">Запросить пользователей</Button>
            {error.length > 0 && (
                <FormHelperText error>{error}</FormHelperText>
            )}
            <hr/>
            <br/>
            {/*<div>*/}
            {/*    <h3>Создать пользователя:</h3>*/}
            {/*    <input/>*/}
            {/*    <input/>*/}
            {/*    <button></button>*/}
            {/*</div>*/}
            <hr/>
            <br/>
            <div>
                <h3>Загрузка файла:</h3>
                <input id="file" type="file"/>
                <button disabled={isLoading} onClick={uploadFile}>Загрузить</button>
                {isLoading && <p>Загрузка файла ...</p>}
            </div>
        </div>
    );
};

export default App;