import React from 'react';

const EmptyBlock = () => {
    return (
        <div className="block empty-block">
            <img src="https://www.clipartmax.com/png/full/454-4542130_monster-spirit-teasing-tongue-transparent-background-ghost-icon-png-transparent.png" width="32px" height="32px" alt="Ghost" />
            <h2>Список фраз пустой</h2>
            <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
        </div>
    );
};

export default EmptyBlock;