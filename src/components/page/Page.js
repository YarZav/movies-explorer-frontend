import React from 'react';

import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import About from '../../components/about/About'

function Page() {
    return (
        <div className='page'>
            <Header/>
            <Intro/>
            <About/>
        </div>
    )
}

export default Page;