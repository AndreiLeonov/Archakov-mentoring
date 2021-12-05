import React from 'react';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';

const App = () => {
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState('');
    const errorMessage = 'Произошла ошибка! повторите попытку позже';
    const url = 'https://61aca2a9d228a9001703ab6c.mockapi.io/users';

    const getUsers = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            if (result && result !== 'Not found') {
                setUsers(result)
            } else {
                setError(errorMessage);
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.log(error);
        }
    };

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
        </div>
    );
};

export default App;