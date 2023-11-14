import React from 'react';

import PromoDescription from './PromoDescription';
import PromoMore from './PromoMore';

function PromoContainer() {
    return (
        <div className='promo__container flex column'>
            <PromoDescription />
            <PromoMore />
        </div>
    )
}

export default PromoContainer;