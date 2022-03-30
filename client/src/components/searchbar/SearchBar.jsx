import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../actions";
import styles from './Searchbar.module.css'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameDogs(name))
    }

    return (
        <div class={styles.box}>
            <input class={styles.txt} type= 'text' placeholder = "Search..."
            onChange= {(e) => handleInputChange(e)}
            />
            <a href class={styles.btn} type='submit' onClick={(e)=>handleSubmit(e)}>
            <i class="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    )
}