import {GET_DOGS, FILTER_BY_TEMP, FILTER_CREATED, ORDER_BY_NAME, GET_NAMEDOGS, GET_TEMPERAMENTS, GET_DETAILS, ORDER_BYWEIGHT } from '../actions';

const initialState = {
    allDogs: [],
    everyDogs: [],
    detail: [],
    temperaments: [],
    filterName: '',
   };

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DOGS:
            return {...state,
                 allDogs: action.payload,
                 everyDogs: action.payload
                };
        
        case GET_TEMPERAMENTS:
              return{
                ...state, 
                temperaments: action.payload                                          
            }
        case FILTER_BY_TEMP:
            const everyDogs = state.everyDogs
            const tempFilter = action.payload === 'Temperaments' ? everyDogs :  everyDogs.filter(dog => {const aux = dog.Temperaments?.map(temp=> temp.name);
                if (aux?.includes(action.payload)) return dog;});
            
            
            return {...state, allDogs: tempFilter
            }
        case "POST_ADOPTED":
            return {
                ...state,
            }    
        case FILTER_CREATED:
            const everyDogs2 = state.everyDogs 
            const createdFilter = action.payload === 'created' ? everyDogs2.filter(el => el.created) : everyDogs2.filter(el => !el.created)   
            return {
                ...state, allDogs: action.payload === 'allDogs' ? state.everyDogs : createdFilter
            }
        case GET_NAMEDOGS:
            return{
                ...state,
                allDogs: action.payload
            }

        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'asd' ? state.allDogs.sort(function (a, b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0;
            }) :
            state.allDogs.sort(function (a, b){
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1;
                }
                return 0
            })
            return{
                ...state, allDogs: sortedArr
            }
            case ORDER_BYWEIGHT:
                let sortedWArr = action.payload === 'asd' ? state.allDogs.sort(function (a, b){
                    if(parseInt(a.weightmax) > parseInt(b.weightmax)){
                        return -1;
                    }
                    if(parseInt(b.weightmax) > parseInt(a.weightmax)){
                        return 1;
                    }
                    return 0;
                }) :
                state.allDogs.sort(function (a, b){
                    if(parseInt(a.weightmin) < parseInt(b.weightmin)){
                        return -1;
                    }
                    if(parseInt(b.weightmin) < parseInt(a.weightmin)){
                        return 1;
                    }
                    return 0
                })
                return{
                    ...state, allDogs: sortedWArr
                }
        case GET_DETAILS:
            return{
                ...state,
                detail: action.payload
            }

        default:
            return state;
    }
}


