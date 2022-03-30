import styles from './Landing.module.css'
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Landing() {
    const dogs = useSelector((state) => state.allDogs)
    return (
        <section className={styles.land}>
            <div className={styles.img}>
            </div>

            <div className={styles.in_flex}>
                <div className={styles.title}><h1>
                    DOG APP
                </h1>
                </div>
                <div className={styles.welcome}><Link to={'/home'} className={styles.welcome}>
                    <h2>Welcome!
                    </h2>
                </Link></div>
            </div>
        </section>
    )
}

