import React from 'react';

import Section from '../section/Section'
import PromoImage from './PromoImage';
import PromoContainer from './PromoContainer';

function Promo() {
    return (
        <Section type ={'promo'}>
            <PromoContainer />
            <PromoImage />
        </Section>
    )
}

export default Promo;