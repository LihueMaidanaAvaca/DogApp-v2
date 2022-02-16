import styles from './Landing.module.css'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Landing(){
    const dogs= useSelector((state)=>state.allDogs)
    return(
        <div className={styles.div_render}>
            <div className={styles.items}>
            <label className={styles.title}> ADogMe </label>
            {console.log('a',dogs)}
            <Link className={styles.home} to={'/home'} >Welcome</Link>
            </div>
        </div>
    )
}

