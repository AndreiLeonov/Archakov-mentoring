import React from 'react';
import Address from './forms/Address';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PersonalInfo from './forms/PersonalInfo';
import ResultData from './forms/ResultData';

const App = () => {
    const history = useNavigate();
    const [data, setData] = React.useState({});
    console.log(data);

    const nextStep = (page) => {
        history(page);
    ;}

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<PersonalInfo nextStep={nextStep} setData={setData}/>} exact={true}/>
                <Route path={'/address'} element={<Address nextStep={nextStep} setData={setData}/>}/>
                <Route path={'/result'} element={<ResultData data={data}/>}/>
                <Route path={'*'} element={<h2 style={{ textAlign: 'center' }}>Страница не найдена!</h2>}/>
            </Routes>
        </div>
    );
};

export default App;