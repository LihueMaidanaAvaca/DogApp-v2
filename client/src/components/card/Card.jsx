import React from "react";
import style from './Card.module.css'

export default function Card({name, img, weightmin, weightmax, temp, id}) {
    return (
        <div className={style.cardcontainer}>
            
            <img src={img} className={style.img} alt="img not found"  />
            <h3 className={style.name}>{name}</h3>
            <h4 className={style.temptittle}>Personality</h4>            
            <div>
            {temp?.map(t=> <div className={style.temps} key={t.name}> {t.name+' '}</div>)}
            </div>
            <h5 className={style.weight}>Weight:  {weightmin}-{weightmax} Kg </h5>
           
        </div>
    )
}