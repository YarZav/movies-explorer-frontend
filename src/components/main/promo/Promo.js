import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import PromoContainer from './PromoContainer';

function Promo(props) {
    function onLearnMoreClick() {
        props.onLearnMoreClick();
    }

    return (
        <Content type='promo'>
            <Section type ={'promo'}>
                <PromoContainer onLearnMoreClick={onLearnMoreClick}/>
            </Section>
        </Content>
    )
}

export default Promo;