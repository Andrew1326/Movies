import React from "react";
import styles from './loader.module.css';

const Loader = (): JSX.Element => {
    return (
        <div id={styles.lds_grid}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader