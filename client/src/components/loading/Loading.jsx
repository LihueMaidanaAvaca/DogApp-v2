import styles from './Loading.module.css'
import React from 'react'

export default function Loading(){
    return(
        <div className={styles.loading}>
            <img src="https://mascotte.cl/wp-content/uploads/2019/11/dog.gif" alt="" />
            <h2>LOADING</h2>
        </div>
    )
}