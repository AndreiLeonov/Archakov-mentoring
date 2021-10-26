import React from 'react';
import EmptyBlock from './Components/EmptyBlock';
import Phrase from './Components/Phrase';

const App = () => {

    const [phrases, setPhrases] = React.useState([]);

    const nounsArr = [
        "лгун",
        "день",
        "конь",
        "олень",
        "человек",
        "программист",
        "ребёнок",
        "конец",
        "город",
        "дурак"
    ];
    const adjectivesArr = [
        "абсолютный",
        "адский",
        "азартный",
        "активный",
        "ангельский",
        "астрономический",
        "баснословный",
        "безбожный",
        "безбрежный",
        "безвозвратный",
        "безграничный",
        "бездонный",
        "бездушный",
        "безжалостный",
        "замечательно",
        "замечательный",
        "записной",
        "запредельный",
        "заядлый",
        "звериный",
        "зверский",
        "зеленый",
        "злой",
        "злостный",
        "значительный",
        "неоспоримый",
        "неотразимый",
        "неоценимый",
        "непередаваемый"
    ];

    const generatePhrase = () => {
        let firstWord = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
        let secondWord = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)];
        let thirdWord = nounsArr[Math.floor(Math.random() * nounsArr.length)];
        let result = firstWord + ' ' + secondWord + ' ' + thirdWord;
        setPhrases((prev) =>[ result, ...prev ] );
    }

    const resetArr = () => {
        setPhrases([]);
    }

    return (
        <div className="wrapper">
            <button className="btn btn_generate" onClick={generatePhrase}>Сгенерировать</button>
            <button className="btn btn_clear" onClick={resetArr}>Очистить</button>
            { !phrases.length ? <EmptyBlock/> : <Phrase data={phrases}/> }
        </div>
    );
};

export default App;