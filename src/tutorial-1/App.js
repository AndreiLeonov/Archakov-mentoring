import React from 'react';
import FuncProfile from "./Components/FuncProfile";
import ClassProfile from "./Components/ClassProfile";

const App = () => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const date = new Date().toLocaleString('ru-RU', options);

    return (
        <div style={{ marginLeft: '10px' }}>
            <FuncProfile
                title="Функциональный компонент"
                name="Вася"
                date={date}
            />
            <hr/>
            <ClassProfile
                title="Классовый компонент"
                name="Вася"
                date={date}
            />
        </div>
    );
};

export default App;