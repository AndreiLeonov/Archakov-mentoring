import React from 'react';

const Phrase = ({ data }) => {
    return (
        <div className="list">
            { data.map((el,i) => <div key={i} className="block"><h3>{el}</h3></div>)}
        </div>
    );
};

export default Phrase;