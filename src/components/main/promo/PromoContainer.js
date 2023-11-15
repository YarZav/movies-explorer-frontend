import PromoDescription from './PromoDescription';
import PromoImage from './PromoImage';

function PromoContainer() {
    return (
        <div className='flex full-width content-space-between'>
            <PromoDescription />
            <PromoImage />
        </div>
    )
}

export default PromoContainer;