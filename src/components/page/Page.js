import React from 'react';

import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import AboutProject from '../about-project/AboutProject';
import Technology from '../technology/Technology'
import Portfolio from '../portfolio/Portfolio';

function Page() {
    return (
        <div className='page'>
            <Header/>
            <Intro/>
            <AboutProject/>
            <Technology/>
            <Portfolio/>
        </div>
    )
}

export default Page;