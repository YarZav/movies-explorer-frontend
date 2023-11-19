import PromoDescription from './PromoDescription';
import PromoImage from './PromoImage';

function PromoContainer(props) {
    function onLearnMoreClick() {
        props.onLearnMoreClick();
    }

    return (
        <div className='promo__container'>
            <PromoDescription onLearnMoreClick={onLearnMoreClick}/>
            <PromoImage />
        </div>
    )
}

export default PromoContainer;