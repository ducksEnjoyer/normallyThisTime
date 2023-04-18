import styles from "./nameIwant.module.css"
export default function WhateverIwant({children}) {
    return( 
        <div className={styles.container}>
            {children}
        </div>
    )
}