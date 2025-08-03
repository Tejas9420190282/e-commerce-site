
// Furnitures.jsx

import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

function Furnitures() {
    
    const [furnitures, setFurnitures] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const featchAllfurnitures = async () => {
            try {
                const responce = await axios.get(
                    "https://api.escuelajs.co/api/v1/furnitures"
                );

                setFurnitures(responce.data);
            } catch (error) {
                
            } finally {
                setLoading(false);
            }
        };

        featchAllfurnitures();
    }, []);

    return (
        <>
            <Navbar />

            {loading ? (
                    <p className="text-center text-lg mt-25">Loading...</p>
                ) : furnitures.length === 0 ? (
                    <p className="text-center text-red-500 text-3xl p-6 mt-25">
                        Data not found
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {furnitures.map((product) => (
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
                        
                    </div>
                ))}
            </div>
                )

            }           
        </>
    );
}

export default Furnitures;
