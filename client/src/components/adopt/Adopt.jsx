import React, {useState, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {postAdopted, getTemperaments} from '../../actions';
import { useDispatch, useSelector } from "react-redux";


function validate(input){
    let errors={};
    if(!input.name){
        errors.name = 'Name is require';
    }
    return errors;
}

export default function Adopt(){
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
        life_span: "",
        image:"",
        temperaments: []
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
            life_span: 0,
            image:"",
            temperaments: []
        })
        // history.push('/home')
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
        <div>
            <Link to= '/home'><button>Back</button></Link>
            <h1>Adopt a Dog!</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input 
                    type= "text" 
                    value= {input.name} 
                    name= "name" 
                    onChange={(e)=>handleChange(e)}
                    />
                    {errors.name && (
                    <p className='error'>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>heightmin:</label>
                    <input type= "number" value= {input.heightmin} name= "heightmin" onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>heightmax:</label>
                    <input type= "number" value= {(input.heightmax)} name= "heightmax" onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>weightmin:</label>
                    <input type= "number" value= {input.weightmin} name= "weightmin" onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>weightmax:</label>
                    <input type= "number" value= {input.weightmax} name= "weightmax" onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>lifespan:</label>
                    <input type= "number" value= {input.life_span} name= "life_span" onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type= "url" value= {input.image} name= "image" onChange={(e)=>handleChange(e)}/>
                </div>
                <select onChange={(e)=>handleSelect(e)}>
                <option name='temp' key={'a'}>Temperaments</option>
                    {temperaments.map((tem,i)=>(
                        <option name='temperaments'key={i} value={tem.name}>{tem.name}</option>
                    ))}
                </select>
                <ul><li>{input.temperaments.map(el=> el +", ")}</li></ul>
                
                <button type='submit' >ADOPT!</button>
            </form>
            {input.temperaments.map((el,i)=>
                <div className='divTem'key={i}>
                    <p>{el}</p>
                    {console.log('este es el imput', input)}
                    <button className="botonX" onClick={()=> handleDelete(el)}>x</button>
                    </div>
                    )}
        </div>
    )




}