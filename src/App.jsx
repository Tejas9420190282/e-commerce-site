// App.jsx

import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import All_Products from "./pages/All_Products";
import Cloths from "./pages/Cloths";
import Electronics from "./pages/Electronics";
import Furnitures from "./pages/Furnitures";
import Toys from "./pages/Toys";
import MyCart from "./pages/MyCart";
import Serach_Product from "./pages/Serach_Product";
import Protected_Routes from "./Protected_Routes";
import My_Accout from "./pages/My_Accout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                pauseOnHover={false}
                theme="colored"
                limit={1}
                style={{ zIndex: 9999 }}
            />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route
                    path="/home"
                    element={
                        <Protected_Routes>
                            <HomePage />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/all"
                    element={
                        <Protected_Routes>
                            <All_Products />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/clothes"
                    element={
                        <Protected_Routes>
                            <Cloths />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/electronics"
                    element={
                        <Protected_Routes>
                            <Electronics />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/furnitures"
                    element={
                        <Protected_Routes>
                            <Furnitures />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/toys"
                    element={
                        <Protected_Routes>
                            <Toys />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/search-product"
                    element={
                        <Protected_Routes>
                            <Serach_Product />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/my-cart"
                    element={
                        <Protected_Routes>
                            <MyCart />
                        </Protected_Routes>
                    }
                />

                <Route
                    path="/my-account"
                    element={
                        <Protected_Routes>
                            <My_Accout />
                        </Protected_Routes>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
