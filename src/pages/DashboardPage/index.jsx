import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/kenzie-hub-logo.svg";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {

    const { loggedInUser, logout } = useContext(UserContext);

    const navigate = useNavigate();

    return (
        <main>
            <section className={styles.dashBoardContainer}>

                <header>
                    <img src={logo} alt="logo" />

                    <button onClick={logout}>Sair</button>
                </header>

                <hr />

                <div className={styles.dashBoardHeader}>
                    <h2 className="title1">Olá, {loggedInUser.user.name}</h2>

                    <small className="headline">{loggedInUser.user.course_module}</small>
                </div>  

                <hr />

                <div className={styles.dashBoardMain}>
                    <h2 className="title1">Que pena! Estamos em desenvolvimento :&#40;</h2>
                    <p className="paragraph">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>

            </section>
            
        </main>
    )
}