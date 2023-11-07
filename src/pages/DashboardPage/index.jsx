import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/kenzie-hub-logo.svg";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/CreateTechModal";
import { EditTechModal } from "../../components/EditTechModal";

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
                    <h2 className="title1">Olá, {loggedInUser.name}</h2>

                    <small className="headline">{loggedInUser.course_module}</small>
                </div>  

                <hr />

                <div className={styles.dashBoardMain}>

                    <div className={styles.techListHeader}>
                        <h2>Tecnologias</h2>
                        <button>+</button>
                    </div>

                    <TechList/>
                </div>

            </section>
                    
            {/* <CreateTechModal/> */}
            {/* <EditTechModal /> */}
        </main>
    )
}