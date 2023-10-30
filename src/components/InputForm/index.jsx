import { forwardRef } from "react";
import styles from "./style.module.scss";

export const InputForm = forwardRef(({label, error, ...rest}, ref) => {

    return (
        <div className={styles.inputContainer}>
            <label className="headline">{label}</label>
            <input ref={ref} {...rest} />
            {error ? <small className={`headline ${styles.errorMessage}`} >{error.message}</small> : null}
        </div>
    )
});