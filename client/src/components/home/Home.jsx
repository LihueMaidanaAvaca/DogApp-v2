import React, { useEffect, useState } from 'react'
// import {Landing} from '../landing/Landing';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, filterDogsByTemp, filterCreated, orderByName, getTemperaments, orderByWeight} from '../../actions';
import { Link } from 'react-router-dom';
import Card from '../card/Card';
import Paginate from '../paginate/Paginate';
import SearchBar from '../searchbar/SearchBar';
import styles from './home.module.css'

export function Home(imgd){
    const dispatch= useDispatch()
    const allDogs = useSelector((state) => state.allDogs)
    const [orden, setOrden] = useState('')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)
    const temperaments = useSelector((state) => state.temperaments)
    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    
    console.log('home', allDogs)
    useEffect(()=>{
        dispatch(getDogs());
        setLoading(false)
    },[dispatch])



    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordered ${e.target.value}`)    
    }

    function handleFilterTemp(e){
        dispatch(filterDogsByTemp(e.target.value))
    }

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    }

    function handleSortWeight(e){
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordered ${e.target.value}`)    
    }

    // function handleSelect(e){
    //     setInput({
    //         ...input,
    //         temperaments: [...input.temperaments,e.target.value]
    //     })
    // }
    
    useEffect(() => {
        dispatch(getTemperaments());
    }, []);
    
    
    return(
        <div className={styles.div_render}><h1>DOG APP</h1>
           <div className={styles.navbar}>
               <select defaultValue='default' onChange={(e)=>handleFilterTemp(e)}>
                    <option name='temp' key={'a'}>Temperaments</option>
                    {temperaments.map((tem,i)=>(
                        <option name='temperaments'key={i} value={tem.name}>{tem.name}</option>
                        ))}
                </select>
               <select defaultValue='default' onChange= {e => handleSort(e)}>
                  <option value='default' disabled='disabled'>ABC Order</option>
                   <option value= 'asd'>ASCENDING</option>
                   <option value= 'des'>DESCENDING</option>
               </select>
               <select defaultValue='default' onChange= {e => handleSortWeight(e)}>
                   <option value='default' disabled='disabled'>Weight Order</option>
                   <option  value= 'des'>LIGHTER</option>
                   <option value= 'asd'>HEAVIER</option>
               </select>
               <select defaultValue='default' onChange= {e => handleFilterCreated(e)}>
                   <option value= 'allDogs'>EVERYDOG</option>
                   <option value= 'created'>ADDED</option>
                   <option value= 'api'>BREEDS</option>
               </select>
                        <button className={styles.buttons}onClick={e=> {handleClick(e)}}>Reset</button>
                        <Link to= '/addog'className={styles.buttons}>AddDog+</Link>
               <SearchBar/>
               </div>
                        <Paginate
                        dogsPerPage= {dogsPerPage}
                        allDogs={allDogs.length}
                        paginate= {paginate}
                        />  

              <div className={`${styles.cards}`} >

               { !loading ? currentDogs.map(dog=>{
                   console.log('onedog', dog);
                   return (
                       <div key={dog.id}>
                          <Link to={`/${dog.id}`}>
                          <Card name={dog.name} img={dog.image} weightmin={dog.weightmin} 
                          weightmax={dog.weightmax} temp={dog.Temperaments} id={dog.id} life_span={dog.life_span}
                          />
                          </Link>
                      </div> 
                       );
                    }):<p>Loading...</p>
                }
                </div>
       </div>
       
       )
       
}
    
    
    
    