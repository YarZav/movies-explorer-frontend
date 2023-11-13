import React from 'react';

import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import AboutProject from '../about-project/AboutProject';
import Techs from '../techs/Techs'
import Portfolio from '../portfolio/Portfolio';

function Page() {
    return (
        <div className='page'>
            <Header/>
            <Intro/>
            <AboutProject/>
            <Techs/>
            <Portfolio/>
        </div>
    )
}

export default Page;