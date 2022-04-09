import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect, useState } from "react";
import styles from './Details.module.css'


export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()
    const [stats, setStats] = useState([]);

    const myDog = useSelector ((state)=> state.detail)

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id));
    },[dispatch])
    
    
    
    useEffect(() => {
        setStats(myDog);
    }, [myDog])
    console.log(myDog[0])
    
    return (
        <div className={styles.container}>          
            <Link to= '/home' class={styles.home}>Home</Link>
            {myDog.length>0?
                <section class={styles.details}>
                    
                    <h1 className={styles.title}>{myDog[0].name} </h1>
                    
                    
                    <div className={styles.info}>
                       <img className={styles.img} src={myDog[0].image} alt="" />
                    
                       <div class={styles.text}>
                           <h2>Weight:{myDog[0].weightmin}Kg -{myDog[0].weightmax}Kg</h2>
                           <h2>Height:{myDog[0].heightmin}Cm -{myDog[0].heightmax}Cm</h2>
                           <h2>Life Span: {myDog[0].lifespan} years </h2>
                           <h2>Personality: <p class={styles.temp}>{myDog[0].Temperaments.map(t=> t.name).join('-')}</p></h2>
                       </div>
                    </div>
                </section> :<p>Loading...</p>
            }
        </div>
    )
}

