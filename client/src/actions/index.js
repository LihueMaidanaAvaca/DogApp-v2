import axios from 'axios';
export const GET_DOGS = 'GET_DOGS'
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP'
export const FILTER_CREATED = 'FILTER_CREATED'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const GET_NAMEDOGS = 'GET_NAMEDOGS'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const SET_NAME = 'SET_NAME'
export const GET_DETAILS = 'GET_DETAILS'
export const ORDER_BYWEIGHT = 'ORDER_BYWEIGHT'

export function getDogs() {
    return async function(dispatch){
        var json = await axios.get('/dogs');
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export function getNameDogs(name){
    
    return async function(dispatch){
        try{
            var json = await axios("/dogs?name="+name);
            return dispatch ({
                type : GET_NAMEDOGS,
                payload: json.data
            })
        }catch (error){ }
    }
}

export function setFilterName(name){
    return ({
        type : SET_NAME,
        payload: name
    })

}


export function getTemperaments(){
    return async function (dispatch) {
        var info = await axios("/temperaments", {

        });
        return dispatch({ 
            type: GET_TEMPERAMENTS,
            payload: info.data
        })
    }
}

export async function postAdopted(payload){
    
        const response = await axios.post("/dog", payload);
        return response;
    
}

export function filterDogsByTemp(payload){
    return {
        type: FILTER_BY_TEMP,
        payload
    }
}

export function filterCreated(payload){
    return{
        type: FILTER_CREATED,
        payload
    }
}

export function orderByName(payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByWeight(payload){
    return{
        type: ORDER_BYWEIGHT,
        payload
    }
}

export function getDetail(id){
   return async function(dispatch){
       try{
           var json = await axios.get("/dogs/"+id);
           return dispatch({
               type: GET_DETAILS,
               payload: json.data
           })
       } catch(error){
       }
   }
}