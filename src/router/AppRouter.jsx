import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage"

function AppRouter() {
    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={MainPage} />
            </Route>
        </Routes>
    )
}

export default AppRouter; 