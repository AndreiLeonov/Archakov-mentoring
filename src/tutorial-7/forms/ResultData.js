import React from 'react';
import { Paper } from '@mui/material';

const ResultData = ({ data }) => {
    return (
        <Paper>
            <ul>
                <li>
                    <b>Имя:</b>{data?.firstName}
                </li>
                <li>
                    <b>Фамилия:</b>{data?.lastName}
                </li>
                <li>
                    <b>Почта:</b>{data?.email}
                </li>
                <li>
                    <b>Город:</b>{data?.city}
                </li>
            </ul>
        </Paper>
    );
};

export default ResultData;