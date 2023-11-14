import React from 'react';

import Header from '../../components/header/Header'
import Promo from '../promo/Promo'
import AboutProject from '../about-project/AboutProject';
import Techs from '../techs/Techs'
import AboutMe from '../about-me/AboutMe';

function Page() {
    return (
        <div className='page'>
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </div>
    )
}

export default Page;