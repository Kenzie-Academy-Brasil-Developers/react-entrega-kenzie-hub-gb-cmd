import { useForm } from "react-hook-form";
import logo from "../../assets/img/kenzie-hub-logo.svg";
import { InputForm } from "../../components/InputForm";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./formSchema";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { FormSection } from "../../components/FormSection";

export const RegisterPage = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    const registerUser = async (formData) => {
        try {
            const { data } = await api.post("/users", formData);

            toast.success("Conta criada com sucesso!");
            
            navigate("/")
        } catch (error) {
            toast.error("Ops! Algo deu errado");
            
        }
    }

    const submit = (formData) => {
        registerUser(formData);
        
    }

    return (
        <main>
            <section className={styles.registerPage}>

                <div className={styles.registerContainer}>

                    <div className={styles.registerHeader}>
                        <img src={logo} alt="logo" />

                        <Link to="/" className={styles.loginRedirectButton}>Voltar</Link>
                    </div>

                    <div className={styles.formContainer}>
                        <h3 className="title1">Crie sua conta</h3>
                        <small className="headline">Rápido e grátis, vamos nessa</small>

                        <FormSection onSubmit={handleSubmit(submit)}>
                            <InputForm placeholder="Digite aqui seu nome" type="text" label="Nome" {...register("name")} error={errors.name} />

                            <InputForm placeholder="Digite aqui seu email" type="email" label="Email" {...register("email")} error={errors.email} />

                            <InputForm placeholder="Digite aqui sua senha" type="password" label="Senha" {...register("password")} error={errors.password} />

                            <InputForm placeholder="Digite novamente sua senha" type="password" label="Confirmar senha" {...register("confirmPassword")} error={errors.confirmPassword} />

                            <InputForm placeholder="Fale sobre você" type="text" label="Bio" {...register("bio")} error={errors.bio} />

                            <InputForm placeholder="Opção de contato" type="text" label="Contato" {...register("contact")} error={errors.contact} />
                            

                            <label className="headline">Selecionar módulo</label>
                            <select {...register("course_module")} defaultValue={""} >
                                <option value="">Selecione o módulo</option>

                                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo &#40;Introdução ao Frontend&#41;</option>

                                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo &#40;Frontend Avançado&#41;</option>

                                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo &#40;Introdução ao Backend&#41;</option>
                                
                                <option value="Quarto módulo (Backend Avançado)">Quarto módulo &#40;Backend Avançado&#41;</option>

                            </select>
                            {errors.courseModule ? <small className="headline">{errors.courseModule.message}</small> : null} 

                            <button className={styles.createAccountButton}>Cadastrar</button>
                        </FormSection>
                    </div>
            
                </div>

            </section>
        </main>
    )
}