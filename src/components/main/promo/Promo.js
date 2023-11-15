import Content from '../../common/content/Content';
import Section from '../../common/section/Section'
import PromoContainer from './PromoContainer';

function Promo() {
    return (
        <Content type='promo'>
            <Section type ={'promo'}>
                <PromoContainer />
            </Section>
        </Content>
    )
}

export default Promo;