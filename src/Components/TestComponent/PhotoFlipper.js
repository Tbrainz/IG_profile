import React from 'react'
import Nav from './Nav'
import './Photo.css'
import Body1 from './Body1'
import Footer from './Footer'
import MyBody2 from './Body2'

export default function PhotoFlipper(){
    return(
        <div className='photo_body'>
            <Nav />
            <Body1 />
            <MyBody2 />
            <Footer />
        </div>
    )

}