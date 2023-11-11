import React from 'react';

import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import About from '../about/About';
import Technology from '../technology/Technology'

function Page() {
    return (
        <div className='page'>
            <Header/>
            <Intro/>
            <About/>
            <Technology/>
        </div>
    )
}

export default Page;