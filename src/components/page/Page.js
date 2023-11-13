import React from 'react';

import Header from '../../components/header/Header'
import Promo from '../promo/Promo'
import AboutProject from '../about-project/AboutProject';
import Techs from '../techs/Techs'
import Portfolio from '../portfolio/Portfolio';

function Page() {
    return (
        <div className='page'>
            <Header/>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <Portfolio/>
        </div>
    )
}

export default Page;