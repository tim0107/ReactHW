import React, { useState } from "react";
import "./Cart.css";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const products = [
        { id: 1, name: "IPhone 15", price: "25,000,000" },
        { id: 2, name: "IPad Pro", price: "18,000,000" },
        { id: 3, name: "MacBook Air M2", price: "32,000,000" },
    ];

    const addToCart = (product) => {
        const exists = cartItems.find(item => item.id === product.id);
        if (exists) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        const exists = cartItems.find(item => item.id === product.id);
        if (exists.quantity === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }
    };

    return (
        <div className="cart-main">
            <h1>Giỏ Hàng{cartItems.length === 0 ? "" : `(${cartItems.length} Sản Phẩm)`}</h1>

            <div className="menu">
                <h2>Danh Sách Sản Phẩm</h2>
                {products.map((product) => (
                    <div className="sub-menu" key={product.id}>
                        <h3>
                            {product.name} - {product.price} VND
                        </h3>
                        <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
                    </div>
                ))}
            </div>

            <div className="display-cart">
                <h2>Giỏ hàng của bạn:</h2>
                {cartItems.length === 0 ? (
                    <p>Chưa có sản phẩm nào.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.price.toLocaleString()} VND
                                <strong> {item.quantity} Sản Phẩm</strong>
                                <button onClick={() => addToCart(item)} className="plus">+</button>
                                <button onClick={() => removeFromCart(item)} className="remove">-</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
