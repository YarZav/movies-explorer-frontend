import React from 'react';

import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import Technology from '../technology/Technology'

function Page() {
    return (
        <div className='page'>
            <Header/>
            <Intro/>
            <Technology/>
        </div>
    )
}

export default Page;