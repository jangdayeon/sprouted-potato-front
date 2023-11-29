import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage"
import "../App.css";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter; 