import React from 'react'
import JokeRaw from './JokeRaw'

const Joke = JokeRaw.map((props)=>{
    console.log(props)
    return (
        <div>
            <h3 className='joke-name'>Name is {props.Name}</h3>
            <span>Number is {props.Number}</span>
            <span>Age is {props.Age}</span>
        </div>
    )
})

export default Joke