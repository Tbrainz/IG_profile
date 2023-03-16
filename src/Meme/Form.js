import React from 'react'
import MemeData from './memeData'

export default function Form(){
    const [memes, setMemes] = React.useState(
        {
            meme : 'lucky is he that is drunk',
            by : 'marlian',
            url : 'http://ashman.com',
            date : '12-22-23',
            img : '../img/profile.jpg'
        },
        {
            meme : 'there shall be school no more',
            by : 'lucky dube',
            url : 'http://lucky.com',
            date : '11-22-23',
            img : '../img/favicon.ico'
        },
        {
            meme : 'them say na ghana weed good pass',
            by : 'Tope tome',
            url : 'http://topetome.com',
            date : '12-22-23',
            img : '../img/gv.jpg'
        }
    )

   

   
    return(
        <main>
            <div className='form'>
                <input type='text' placeholder='meme text' className='input1 input' />
                <input type='text' placeholder='Button text' className='input2 input' />
                <button className='meme-btn'>Generate new image</button>
            </div>
            <div className='meme-image'>
               
              <img  />
            </div>
        </main>
    )
}