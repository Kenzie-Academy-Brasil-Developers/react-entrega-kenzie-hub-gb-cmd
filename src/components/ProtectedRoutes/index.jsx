import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { loggedInUser } = useContext(UserContext);

    return loggedInUser ? <Outlet /> : <Navigate to="/" />
}