import { useForm } from "react-hook-form";
import { FormSection } from "../FormSection";
import { InputForm } from "../InputForm";
import styles from "./style.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const CreateTechModal = () => {

    const { createTechnology, setIsOpen } = useContext(TechContext);
    
    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        createTechnology(formData);
    } 

    return (
        <div className={styles.modalOverlay} role="dialog">
            <div className={styles.createTechModal}>
                <div className={styles.modalHeader}>
                    <h3>Cadastrar Tecnologia</h3>

                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>

                <FormSection onSubmit={handleSubmit(submit)}>
                    <InputForm type="name" label="Nome" placeholder="Digite aqui sua tecnologia" {...register("title")} />

                    <div className={styles.techStatusContainer}>
                        <label className="headline">Selecionar status</label>
                        <select {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                    </div>
                    <button className={styles.createTechnologyButton}>Cadastrar tecnologia</button>
                </FormSection>
            </div>
        </div>
    )
}