import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from './img/img.jpg'

const CardTable = () => {
    const [event, setEvent] = useState([])

    const eventName = async () =>{

        const response = await axios.get('https://devapi.2gathers.com/api/events/list-events/?userId=5')

        setEvent(response.data.listOfHostEvents)

    }

    useEffect(() => {
        eventName();
    }, []);

console.log(event)

    const btnstyle ={
        backgroundColor : 'blue',
        border : '1px solid black',
        color : 'white',
        marginBottom : "20px"
        }

    return (
        <div className='container' style={{display: 'flex', flexDireaction : 'row', flexWrap : 'wrap', boxSizing : 'border-box'}}>
        {event.map((elem, i)=>{
            return(
                <div className="card" style={{width: '18rem',  margin:'10px'}} key={i}>
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{elem.eventName}</h5>
                            <p style={{overflow : 'hidden'}}>{elem.eventDescription}</p>
                            <button className="btn btn-primary" style={{marginRight: '20px'}}>Details</button>
                            <button className="btn btn-primary">Share</button>
                        </div>
                </div>
            )
        })}
        </div>
    );
}

export default CardTable;
