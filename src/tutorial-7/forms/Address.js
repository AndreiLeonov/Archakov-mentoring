import React from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';

const schema = yup.object({
    city: yup.string().required('Обязательное поле!'),
    street: yup.string().required('Обязательное поле!'),
    house: yup.string().required('Обязательное поле!'),
}).required();

const Address = ({ setData, nextStep }) => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm({
        defaultValues: {
            city: '',
            street: '',
            house: '',
        },
        resolver: yupResolver(schema)
    });
    const onSubmit = values => {
        setData((data) => {
            return { ...data, ...values };
        });
        nextStep('result');
    }

    return (
        <form>
            <TextField
                name="city"
                placeholder="Введите город"
                label="Город"
                variant="outlined"
                fullWidth
                className="commonStyle"
                {...register("city")}
                helperText={errors.city && errors.city.message}
                error={!!errors?.city}
            />
            <TextField
                name="street"
                placeholder="Введите улицу"
                label="Улица"
                variant="outlined"
                fullWidth
                className="commonStyle"
                {...register("street")}
                helperText={errors.city && errors.street.message}
                error={!!errors?.street}
            />
            <TextField
                name="house"
                placeholder="Введите дом"
                label="Дом"
                variant="outlined"
                fullWidth
                className="commonStyle"
                {...register("house")}
                helperText={errors.house && errors.house.message}
                error={!!errors?.house}
            />
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

export default Address;