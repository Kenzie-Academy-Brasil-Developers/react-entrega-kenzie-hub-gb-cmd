import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext"

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const { techList, setTechList } = useContext(UserContext);

    const [editingTech, setEditingTech] =useState(null);

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
        <TechContext.Provider value={{ createTechnology, isOpen, setIsOpen,  editingTech, setEditingTech, updateTechnology, deleteTechnology }}>
            {children}
        </TechContext.Provider>
    )
}