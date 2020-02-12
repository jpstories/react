import React from 'react';
import logo from './img/logo.svg';
import account from './img/account.png';
import './Header.css';

function App() {
    return (
        <div className="header">

            <div className="header__logo">
                <img src={logo} className="logo" alt="logo" />
                <h1>React Learning</h1>
            </div>

            <div className="header__menu">
                <ul>
                    <li>Главная</li>
                    <li>Продукт</li>
                    <li>Доставка</li>
                    <li>Партнеры</li>
                    <li>Контакты</li>
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