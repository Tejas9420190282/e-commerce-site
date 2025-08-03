import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Electronics() {
    const [electronics, setElectronics] = useState([]);

    const [loading, setLoading] = useState(true);

    const dispath = useDispatch();

    useEffect(() => {
        const featchAllElectronics = async () => {
            try {
                const responce = await axios.get(
                    "https://api.escuelajs.co/api/v1/products/?categorySlug=electronics"
                );

                setElectronics(responce.data);
            } catch (error) {
                console.log(
                    `Error in featch Allelectronics : ${error.message}`
                );

                toast.error(`Error in featch Allelectronics : ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        featchAllElectronics();
    }, []);

    const handleAddToCart = (product) => {
        dispath({ type: "ADD_TO_CART", payload: product });
        toast.success("Product added to cart!");
    };

    return (
        <>
            <>
                <Navbar />

                {loading ? (
                    <p className="text-center text-lg mt-25">Loading...</p>
                ) : electronics.length === 0 ? (
                    <p className="text-center text-red-500 text-3xl p-6 mt-25">
                        Data not found
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                        {electronics.map((product) => (
                            <div
                                key={product.id}
                                className="border  p-4 flex flex-col items-center"
                            >
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h2 className="text-lg font-semibold text-center">
                                    {product.title}
                                </h2>
                                <p className="text-green-600 font-bold mt-2">
                                    ${product.price}
                                </p>
                                <p className="text-green-600 font-bold mt-2">
                                    {product.category.name}
                                </p>

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="mt-4 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                                >
                                    Add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </>
        </>
    );
}

export default Electronics;
