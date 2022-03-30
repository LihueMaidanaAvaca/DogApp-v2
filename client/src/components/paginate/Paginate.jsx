import React from "react";
import styles from './Paginate.module.css'



export default function Paginate ({dogsPerPage, allDogs, paginate}){
    const pageNumber= []

    for (let i = 0; i <= Math.floor(allDogs/dogsPerPage); i++) {
         pageNumber.push(i+1)
    }
    return(
         
            <ul class={styles.pagination}>
                {pageNumber && pageNumber.map(num =>(
                    <li key={num}>
                    <a href onClick={()=> paginate(num)}>{num}</a>
                    </li>                
                ))}
            </ul>
        
    )

}