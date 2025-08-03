

// MyCart.jsx

import React from "react";
import Navbar from "../component/Navbar";
import { useSelector } from "react-redux";

function MyCart() {
    const cartItems = useSelector((state) => state.cart);

    return (
        <>
            <Navbar />

            <h1 className="mt-10 font-bold text-center">My cart</h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="border p-4 rounded-md shadow-md"
                        >
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h2 className="text-lg font-semibold">
                                {item.title}
                            </h2>
                            <p className="text-green-600 font-bold">
                                ${item.price}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default MyCart;
