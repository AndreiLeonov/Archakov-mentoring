import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().min(1, 'не соблюдено условие минимальной длины имени').required('Обязательное поле!'),
    lastName: yup.string().min(1, 'не соблюдено условие минимальной длины фамилии').required('Обязательное поле!'),
    email: yup.string().email('неверная почта').required('Обязательное поле!'),
    password: yup.string().min(6, 'не соблюдено условие минимальной длины пароля').required('Обязательное поле!'),
}).required();

const PersonalInfo = ({ nextStep, setData }) => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (values) => {
        setData(values);
        nextStep('address');
        //reset();
    }

    return (
        <form>
            <div className="row">
                <TextField
                    name="firstName"
                    placeholder="Введите имя"
                    label="Имя"
                    variant="outlined"
                    fullWidth
                    className="commonStyle"
                    {...register("firstName")}
                    helperText={errors.firstName && errors.firstName.message}
                    error={!!errors?.firstName}
                />
                <TextField
                    name="lastName"
                    placeholder="Введите фамилию"
                    label="Фамилия"
                    variant="outlined"
                    fullWidth
                    className="commonStyle"
                    {...register("lastName")}
                    helperText={errors.lastName && errors.lastName.message}
                    error={!!errors?.lastName}
                />
            </div>
            <div className="row">
                <TextField
                    name="email"
                    placeholder="Введите почту"
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                    className="commonStyle"
                    {...register("email")}
                    helperText={errors.email && errors.email.message}
                    error={!!errors?.email}
                />
                <TextField
                    name="password"
                    placeholder="Введите пароль"
                    label="Пароль"
                    variant="outlined"
                    fullWidth
                    className="commonStyle"
                    type="password"
                    {...register("password")}
                    helperText={errors.password && errors.password.message}
                    error={!!errors?.password}
                />
            </div>
            <div className="row buttons">
                <Button
                    variant="contained"
                    className="commonStyle"
                    color="secondary"
                    onClick={() => reset()}
                >
                    Очистить
                </Button>
                <Button
                    variant="contained"
                    className="commonStyle"
                    onClick={handleSubmit(onSubmit)}
                >
                    Далее
                </Button>
            </div>
        </form>
    );
};

export default PersonalInfo;