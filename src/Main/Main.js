import React from 'react';
import arbuz from './img/arbuz.jpg';
import dynia from './img/dynia.jpg';
import kapusta from './img/kapusta.jpg';
import './Main.css';

function App() {
    return (
        <div className="main">
            <div className="goods__wrapper">

                <div className="goods">
                    <span className="goods__title">Арбуз "Гавайский"</span>

                    <div className="goods__content">
                        <img src={arbuz} />
                        <span className="goods__price">500 руб.</span>
                    </div>
                </div>

                <div className="goods dynia">
                    <span className="goods__title">Дыня "Окинава"</span>

                    <div className="goods__content">
                        <img src={dynia} />
                        <span className="goods__price">1800 руб.</span>
                    </div>
                </div>

                <div className="goods kapusta">
                    <span className="goods__title">Капуста "Цветная"</span>

                    <div className="goods__content">
                        <img src={kapusta} />
                        <span className="goods__price">180 руб.</span>
                    </div>
                </div>

                <div className="goods"></div>
                <div className="goods"></div>
                <div className="goods"></div>
            </div>
        </div>
    );
}

export default App;