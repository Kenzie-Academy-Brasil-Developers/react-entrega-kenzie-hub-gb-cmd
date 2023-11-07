import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();

    const [loggedInUser, setLoggedInUser] = useState(null);

    const [techList, setTechList] = useState([]);
    
    useEffect(() => {
        const autoUserLogin = async () => {
            const userToken = localStorage.getItem("@USERTOKEN");
            
            if(userToken) {
                try {
                    const { data } = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${userToken}`
                        }
                    });

                    setLoggedInUser(data);
                    setTechList(data.techs)

                    navigate("/dashboard");
                } catch (error) {
                    localStorage.removeItem("@USERTOKEN");

                }
            }
        }
        autoUserLogin();
    }, []);

    const registerUser = async (formData) => {
        try {
            const response = await api.post("/users", formData);

            toast.success("Conta criada com sucesso!");
            
            navigate("/");
        } catch (error) {
            toast.error("Ops! Algo deu errado");
            
        }
    };

    const loginUser = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData);

            setLoggedInUser(data.user);

            localStorage.setItem("@USERTOKEN", data.token);
            
            navigate("/dashboard");
        } catch (error) {
            toast.error("Email ou senha incorretos");
            
        }
    };

    const logout = () => {
        setLoggedInUser(null);
        localStorage.removeItem("@USERTOKEN");
        navigate("/");
    };

    return (
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser, registerUser, loginUser, logout, techList, setTechList }} >
            {children}
        </UserContext.Provider>
    )
}