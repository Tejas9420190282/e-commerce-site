
// Serach_products.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

function Serach_products() {
    const [query, setQuery] = useState("");

    const [products, setproducts] = useState([]);

    useEffect(() => {
        const searchproducts = async () => {
            try {
                const responce = await axios.get(
                    `https://api.escuelajs.co/api/v1/products/?title=${query}`
                );

                setproducts(responce.data);
            } catch (error) {
                console.error(`Error in searchproducts : ${error.message}`);

                alert(`Error in searchproducts : ${error.message}`);
            }
        };

        searchproducts();
    }, [query]);

    return (
        <>
            <Navbar />

            <div className="p-4">
                <h1 className="text-xl font-bold mb-4">Search products</h1>

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by products title"
                    className="border p-3 rounded w-full"
                />


                <div className="gap-2 mb-4 flex justify-center items-center">
                    {products.length === 0 && query && (
                        <p className="bg-blue-400">No products found</p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                        {products.map((products) => (
                            <div
                                key={products.id}
                                className="border  p-4 flex flex-col items-center"
                            >
                                <img
                                    src={products.images[0]}
                                    alt={products.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-lg font-semibold text-center">
                                    {products.title}
                                </h2>
                                <p className="text-green-600 font-bold mt-2">
                                    ${products.price}
                                </p>
                                <p className="text-green-600 font-bold mt-2">
                                    {products.category.name}
                                </p>
                                

                                <button
                                    onClick={() => handleAddToCart(products)}
                                    className="mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                                >
                                    Add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Serach_products;
