import React from 'react';
import cart from './img/cart.png';
import './Cart.css';

function App_1() {
    return (
        <div className="cartIcon">
            <img src={cart} className="cartIcon__img" alt="cart" />
            <span className="cartIcon__title">На посадку</span>
        </div>
    );
}

// function App_2() {
//     return (
//         <div className="cart__wrapper">
//             <div className="cart__title"></div>
//             <div className="cart__main"></div>
//             <div className="cart__total"></div>
//         </div>
//     );
// }

export default App_1;
// export default App_2;