import React, {
    useEffect,
    useReducer,
} from "react";
import axios from "axios";

const initalstate = {
    loading: true,
    data: [],
    message: '',
    timeout: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH":
            return ({
                ...state,
                message: "Loading..."
            })
        case "SUCCESS":
            return ({
                ...state,
                data: action.payload,
                loading: false,
                message: ""
            })
        case "FAILURE":
            return ({
                ...state,
                loading: false,
                message: "error"
            })
            case "TIMEOUT":
            return ({
                loading: false,
                data: [],
                message: 'Time out session expired',
                timeout:true
            }
                )
        default:
            return state
    }
}
const Card = () => {
        const [state, dispatch] = useReducer(
            reducer,
            initalstate
        );

        useEffect(() => {
            getAPI()
           const timerid = setTimeout(() => {
                dispatch({
                type:"TIMEOUT"
                })
            }, 60*1000);

            return ()=>{
                clearTimeout(timerid)
            }
            
        }, []);

        function getAPI() {
            dispatch({
                type: "FETCH"
            })
            axios.get('https://devapi.2gathers.com/api/events/list-events/?userId=5')
                .then(function (response) {
                    // handle success
                    // console.log(response.data);
                    dispatch({
                        type: "SUCCESS",
                        payload: response.data.listOfHostEvents,
                    })
                })
                .catch(function (error) {
                    // handle error
                    // console.log(error);
                    dispatch({
                        type: "FAILURE",
                        massage: error
                    })
                })
        }
        const {loading, data, message, timeout} = state
        return ( 
            <div>
                {loading && <h1 style={{color:'blue', textAlign:'center'}}>{message}</h1>}
                {timeout && <h1 style={{color:'red',textAlign:'center'}}>{message}</h1>}
                {data.length>0 && data.map((elem,i)=>{
                    return(
                        <div key={i}> 
                        <div style={{marginTop:'5px', border:'1px solid black'}}>{elem.eventName}</div>
                        <div style={{ margin:'5px', border:'1px solid black'}}>{elem.eventDescription}</div>
                        </div> 
                    )
                })}
            </div>
               
        );
}
export default Card;