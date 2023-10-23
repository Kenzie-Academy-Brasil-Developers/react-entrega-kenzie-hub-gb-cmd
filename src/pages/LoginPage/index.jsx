import styles from "./style.module.scss"
import logo from "../../assets/img/kenzie-hub-logo.svg"
import { useForm } from "react-hook-form"
import { InputForm } from "../../components/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema"
import { api } from "../../services/api";
import { toast } from "react-toastify";


export const LoginPage = ({ setLoggedInUser }) => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        register: zodResolver(loginFormSchema),
    });

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

    const submit = (formData) => {
        loginUser(formData);
    };

    return (
        <main>
            <section className={styles.loginContainer}>
                <img src={logo} alt="logo" />

                <div className={styles.formContainer}>

                    <h3 className="title1">Login</h3>

                    <form onSubmit={handleSubmit(submit)}>
                        <InputForm type="email" label="Email" placeholder="Digite aqui seu nome" {...register("email")} error={errors.email} />

                        <InputForm type="password" label="Senha" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password} />

                        <button className={styles.logInButton}>Entrar</button>
                    </form>

                    <small className="headlineBold">Ainda não possui uma conta ?</small>

                    <Link className={styles.registerButton} to="/register">
                        Cadastre-se
                    </Link>
                    
                </div>

            </section>
        </main>
    )
}