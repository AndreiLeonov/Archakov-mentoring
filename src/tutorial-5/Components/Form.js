import React from 'react';
import { Button, FormHelperText, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Form = ({ sendData }) => {

    const initialState = {
        fullName: '',
        email: '',
        text: '',
    };
    const [data, setData] = React.useState(initialState);

    const onChange = (name, value) => {
        setData({ ...data, [name]: value });
    };

    const sendMessage = () => {
        const dataForSend = {
            fullName: data.fullName.trim(),
            email: data.email.trim(),
            text: data.text.trim(),
            id: new Date().toLocaleString(),
            createdAt: new Date().toLocaleString(),
        };
        sendData(dataForSend);
        setData({
            fullName: '',
            email: '',
            text: '',
        });
    };

    const isDisabled = !data.fullName || !data.email || !data.text;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
            <h3>Форма обратной связи:</h3>
            <TextField
                style={{ marginBottom: '20px' }}
                value={data.fullName}
                name="fullName"
                label="Имя"
                variant="outlined"
                placeholder="введите имя"
                onChange={(e) => onChange(e.target.name, e.target.value)}
                error={!data.fullName}
                required={true}
            />
            <TextField
                style={{ marginBottom: '20px' }}
                value={data.email}
                name="email"
                label="Почта"
                variant="outlined"
                placeholder="введите электронную почту"
                onChange={(e) => onChange(e.target.name, e.target.value)}
                error={!data.email}
                required={true}
            />
            <TextField
                style={{ marginBottom: '20px' }}
                value={data.text}
                name="text"
                label="Сообщение"
                variant="outlined"
                placeholder="введите сообщение"
                onChange={(e) => onChange(e.target.name, e.target.value)}
                error={!data.text}
                required={true}
            />
            <Button
                variant="contained"
                endIcon={<SendIcon/>}
                onClick={sendMessage}
                disabled={isDisabled}
            >
                Отправить
            </Button>
            {isDisabled && <FormHelperText>*для отправки необходимо полностью заполнить форму</FormHelperText>}
        </div>
    );
};

export default Form;