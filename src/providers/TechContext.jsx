import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const [techList, setTechList] = useState([]);

    const [editingTech, setEditingTech] =useState(null);
    
    useEffect(() => {
        const getTechList = async () => {

            const userToken = localStorage.getItem("@USERTOKEN");

            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                });

                setTechList(data.techs);
            } catch (error) {
                toast.error("Ops! Algo deu errado");
            }
             
        }
        getTechList();
    }, []);

    const createTechnology = async (formData) => {
        try {
            const userToken = localStorage.getItem("@USERTOKEN");
            
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            
            setTechList([...techList, data]);
            setIsOpen(false);
        } catch (error) {
            toast.error("Ops! Algo deu errado");
        }
    }

    const updateTechnology = async (formData) => {
        try {
            const userToken = localStorage.getItem("@USERTOKEN");

            const { data } = await api.put(`/users/techs/${editingTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });

            const newTechList = techList.map(tech => {
                if(tech.id === editingTech.id) {
                    return data;
                } else {
                    return tech;
                }
            });

            setTechList(newTechList);
            setEditingTech(null);
        } catch (error) {
            toast.error("Ops! Algo deu errado");

        }
    }

    const deleteTechnology = async (techId) => {
        try {
            const userToken = localStorage.getItem("@USERTOKEN");

            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });

            const newTechList = techList.filter(tech => tech.id !== techId);

            setTechList(newTechList);
            toast.success("Exclusão realizada com sucesso!");
        } catch (error) {
            toast.error("Ops! Algo deu errado");
        }
    }

    return (
        <TechContext.Provider value={{ createTechnology, isOpen, setIsOpen, techList, setTechList, editingTech, setEditingTech, updateTechnology, deleteTechnology }}>
            {children}
        </TechContext.Provider>
    )
}