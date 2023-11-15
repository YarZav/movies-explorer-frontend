import Button from "../../common/button/Button";

function PromoDescription() {
    return (
        <div>
            <h1>Учебный проект студента<br />факультета<br />Веб-разработки.</h1>
            <p className='promo__description'>Листайте ниже, чтобы узнать больше<br />про этот проект и его создателя.</p>
            <Button textColor='text-white' text='Узнать больше' type='promo__button' />
        </div>
    )
}

export default PromoDescription;