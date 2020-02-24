import React from 'react';
import arbuz from './img/arbuz.jpg';
import './Main.css';

function App() {
    return (
        <div className="main">
            <div className="goods__wrapper">

                <div className="goods">
                    <span className="goods__title">Арбуз "Гавайский"</span>
                    <img src={arbuz} />
                    <span className="goods__price">500 руб.</span>
                </div>

                <div className="goods"></div>
                <div className="goods"></div>
                <div className="goods"></div>
                <div className="goods"></div>
                <div className="goods"></div>
            </div>
        </div>
    );
}

export default App;