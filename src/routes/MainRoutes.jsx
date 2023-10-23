import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DashboardPage } from "../pages/DashboardPage"
import { useState } from "react"

export const MainRoutes = () => {

    const [loggedInUser, setLoggedInUser] = useState([]);
    
    return (
        <Routes>
            <Route path="/" element={ <LoginPage setLoggedInUser={setLoggedInUser} /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/dashboard" element={ <DashboardPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> } />
        </Routes>
    )
}