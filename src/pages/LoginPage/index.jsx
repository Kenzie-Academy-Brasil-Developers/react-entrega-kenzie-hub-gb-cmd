import styles from "./style.module.scss";
import logo from "../../assets/img/kenzie-hub-logo.svg";
import { useForm } from "react-hook-form";
import { InputForm } from "../../components/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { FormSection } from "../../components/FormSection";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";


export const LoginPage = () => {

    const { loginUser } = useContext(UserContext);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        register: zodResolver(loginFormSchema),
    });

    const submit = (formData) => {
        loginUser(formData);
    };

    return (
        <main>
            <section className={styles.loginContainer}>
                <img src={logo} alt="logo" />

                <div className={styles.formContainer}>

                    <h3 className="title1">Login</h3>

                    <FormSection onSubmit={handleSubmit(submit)}>
                        <InputForm type="email" label="Email" placeholder="Digite aqui seu nome" {...register("email")} error={errors.email} />

                        <InputForm type="password" label="Senha" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password} />

                        <button className={styles.logInButton}>Entrar</button>
                    </FormSection>

                    <small className="headlineBold">Ainda não possui uma conta ?</small>

                    <Link className={styles.registerButton} to="/register">
                        Cadastre-se
                    </Link>
                    
                </div>

            </section>
        </main>
    )
}