import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Form from './Form'
import MemeData  from './memeData'


export default function MemeApp(){
    

    
    const randomData = MemeData.map((item)=>{
       
        return(
            <div>
                <h1>{item.by}</h1>
                <p>{item.meme}</p>
                <span>{item.url}</span>
                <h4>{item.date}</h4>
                
                  
            </div>


        )
    })

    return(
        <div>
            <Header />
            <Form />
            {randomData}
        </div>

    )

}