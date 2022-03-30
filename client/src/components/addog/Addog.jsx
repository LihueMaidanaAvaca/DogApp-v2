import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postAdopted, getTemperaments} from '../../actions';
import { useDispatch, useSelector } from "react-redux";
import styles from "./Addog.module.css"

function validate(input){
    let errors={};
    if(!input.name){errors.name = 'Breed is require'}

    if(!input.heightmin){errors.heightmin = 'Height between 20-70'}
    if(input.heightmin>input.heightmax){errors.heightmin= 'Heightmin has to be lower than Heightmax'}
    if(!input.heightmax){errors.heightmax = 'Height between 20-100'}
    if(input.heightmax<input.heightmin){errors.heightmax= 'Heightmax has to be larger than Heightmin'}
    
    if(!input.weightmin){errors.weightmin = 'Weight between 1-70'}
    if(input.weightmin>input.weightmax){errors.weightmin= 'Weightmin has to be lower than Weightmax'}
    if(!input.weightmax){errors.weightmax = 'Weight between 3-90'}
    if(input.weightmax<input.weightmin){errors.weightmax= 'Weightmax has to be larger than Weightmin'}
    
    if(!input.life_span){errors.life_span = 'Example 5-10'}
    if(!input.url){errors.url = 'Paste an URL'}
    return errors;
}

export default function AddDog(){
    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state) => state.temperaments)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: "",
        heightmin: "",
        heightmax: "",
        weightmin: "",
        weightmax: "",
        lifespan: "",
        image:"",
        temperaments: [],
        
    })
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }
    
    // function handleCheck(e){
    //     if(e.target.checked){
    //         setInput({
    //             ...input,
    //             status: e.target.value
    //         })
    //     }
    // }

    function handleSelect(e){
        setInput({
            ...input,
            temperaments: [...input.temperaments,e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        postAdopted(input)
        alert("ADOGTED!!!")
        setInput({
            name: "",
            heightmin: 0,
            heightmax: 0,
            weightmin: 0,
            weightmax: 0,
            lifespan: "",
            image:"",
            temperaments: [],
        })
        history.push('/home')
    }

    function handleDelete(el){
        setInput({
            ...input,
            temperaments: input.temperaments.filter(tem=> tem !== el)
        })
    }

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);
    
    return(
        <div className={styles.page}>
            <Link to= '/home'>Home</Link>
            <section className={styles.container}>
               <h1>Add a Dog!</h1>
                <form onSubmit={(e)=>handleSubmit(e)} className={styles.lines}>
            <button type='submit' className={styles.add} >ADD!</button>
                <div>
                    <label>Breed:</label>
                    <input type= "text" value= {input.name} name= "name" onChange={(e)=>handleChange(e)}/>
                    {errors.name && (<p className='error'>{errors.name}</p>)}
                </div>
                <div>
                    <label>Heightmin:</label>
                    <input type= "number" min="20" max="70" value= {input.heightmin} name= "heightmin" onChange={(e)=>handleChange(e)}/>
                    {errors.heightmin && (
                        <p className='error'>{errors.heightmin}</p>
                        )}
                </div>
                <div>
                    <label>Heightmax:</label>
                    <input type= "number" min="30" max="95" value= {(input.heightmax)} name= "heightmax" onChange={(e)=>handleChange(e)}/>
                    {errors.heightmax && (<p className='error'>{errors.heightmax}</p>)}
                </div>
                <div>
                    <label>Weightmin:</label>
                    <input type= "number" min="1" max="60" value= {input.weightmin} name= "weightmin" onChange={(e)=>handleChange(e)}/>
                    {errors.weightmin && (<p className='error'>{errors.weightmin}</p>)}
                </div>
                <div>
                    <label>Weightmax:</label>
                    <input type= "number" min="3" max="90" value= {input.weightmax} name= "weightmax" onChange={(e)=>handleChange(e)}/>
                    {errors.weightmax && (<p className='error'>{errors.weightmax}</p>)}
                </div>
                <div>
                    <label>Lifespan:</label>
                    <input type= "text" value= {input.lifespan} name= "lifespan" onChange={(e)=>handleChange(e)}/>
                    {errors.lifespan && (<p className='error'>{errors.lifespan}</p>)}
                </div>
                <div>
                    <label>Image:</label>
                    <input type= "url" value= {input.image} name= "image" onChange={(e)=>handleChange(e)}/>
                    {errors.image && (<p className='error'>{errors.image}</p>)}
                </div>
                <div>

                <label>Personality:</label>
                <select className={styles.divPer} onChange={(e)=>handleSelect(e)}>
                <option name='temp' key={'a'} >Temperaments</option>
                    {temperaments.map((tem,i)=>(<option name='temperaments'key={i} value={tem.name}>{tem.name}</option>))}
                </select>
                {/* <ul><li>{input.temperaments.map(el=> el +", ")}</li></ul> */}
                </div>
                {console.log(input)}
            </form>
            {input.temperaments.map((el,i)=>
                <div className={styles.divTem}key={i}>
                    <p>{el}</p>
                    <button className="botonX" onClick={()=> handleDelete(el)}>x</button>
                    </div>
                    )}
                </section>
        </div>
    )




}