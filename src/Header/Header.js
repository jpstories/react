import React from 'react';
import seed from './img/seed.png';
import account from './img/account.png';
import './Header.css';

function App() {
    return (
        <div className="header">

            <div className="header__logo">
                <img src={seed} className="logo" alt="logo" />
                <h1>ОГОродник</h1>
            </div>

            <div className="header__menu">
                <ul>
                    <li className="header__menu-active">Главная</li>
                    <li>Семена</li>
                    <li>Доставка</li>
                    <li>Посадка</li>
                    <li>Контакты</li>
                    <li>Мой участок</li>
                </ul>
            </div>

            <div className="header__user">
                <img src={account} alt="account" />
                <span>Войти</span>
            </div>
            
        </div>
    );
}

export default App;