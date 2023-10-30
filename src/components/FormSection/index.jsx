import styles from "./style.module.scss";

export const FormSection = ({ children, ...rest}) => {
    return (
        <form {...rest} className={styles.formSection}>
            {children}
        </form>
    )
}