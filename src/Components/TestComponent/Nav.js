import React from 'react'


export default function Nav(){
    const time = new Date 
    const hour = time.getHours();
    const mins = time.getMinutes();
    const second = time.getSeconds();

    return(
        <div className='header_comp'>
            <header className='header'>
            <div className='header_img'>
                <a href='/img/profile.jpg'>
                <img className='logo_img' src='/img/profile.jpg' alt='LOGO'/>
                </a>
                <h2>GLO</h2>
            </div>
            <div className='header_time'>
            {hour > 0 ? `Good afternoon, Time is ${hour} : ${mins} : ${second}` : `Good Morning, Time is ${hour} : ${mins} : ${second}`}

            </div>
            <nav>
                <ul className='nav_ul'>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">GALLERY</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
            </header>
        </div>
    )
}