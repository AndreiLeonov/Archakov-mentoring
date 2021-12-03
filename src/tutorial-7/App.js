import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";

const App = () => {
    const { handleSubmit, register, formState, reset } = useForm();
    const onSubmit = values => {
        console.log(values);
        reset();
    }

    console.log(formState);
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
                    {...register("firstName", {
                        required: "Данное поле является обязательным!"
                    })}
                    helperText={formState.errors.firstName && formState.errors.firstName.message}
                    error={!!formState.errors?.firstName}
                />
                <TextField
                    name="lastName"
                    placeholder="Введите фамилию"
                    label="Фамилия"
                    variant="outlined"
                    fullWidth
                    className="commonStyle"
                    {...register("lastName", {
                        required: "Данное поле является обязательным!"
                    })}
                    helperText={formState.errors.lastName && formState.errors.lastName.message}
                    error={!!formState.errors?.lastName}
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
                    {...register("email", {
                        required: "Данное поле является обязательным!",
                        pattern: {
                            value: /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
                            message: "почта указана некорректно"
                        }
                    })}
                    helperText={formState.errors.email && formState.errors.email.message}
                    error={!!formState.errors?.email}
                />
                <TextField
                    name="password"
                    placeholder="Введите пароль"
                    label="Пароль"
                    variant="outlined"
                    fullWidth
                    className="commonStyle"
                    type="password"
                    {...register("password", {
                        required: "Данное поле является обязательным!"
                    })}
                    helperText={formState.errors.password && formState.errors.password.message}
                    error={!!formState.errors?.password}
                />
            </div>
            <div className="row">
                <Button
                    variant="contained"
                    className="commonStyle"
                    onClick={handleSubmit(onSubmit)}
                >
                    Зарегистрироваться
                </Button>
                <Button
                    variant="contained"
                    className="commonStyle"
                    color="secondary"
                    onClick={() => reset()}
                >
                    Очистить
                </Button>
            </div>
        </form>
    );
};

export default App;