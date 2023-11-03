import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useState([]);

    const registerUser = async (formData) => {
        try {
            const { data } = await api.post("/users", formData);

            toast.success("Conta criada com sucesso!");
            
            navigate("/")
        } catch (error) {
            toast.error("Ops! Algo deu errado");
            
        }
    }

    const loginUser = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData);
            setLoggedInUser(data);

            localStorage.setItem("@USERTOKEN", JSON.stringify(data.token));
            navigate("/dashboard");
        } catch (error) {
            toast.error("Email ou senha incorretos");
            
        }
    };

    const logout = () => {
        setLoggedInUser([]);
        localStorage.removeItem("@USERTOKEN");
        navigate("/");
    };

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, registerUser, loginUser, logout }} >
            {children}
        </UserContext.Provider>
    )
}