import styles from './Landing.module.css'
import React from 'react'
import { Link } from 'react-router-dom';

export function Landing() {
    
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

