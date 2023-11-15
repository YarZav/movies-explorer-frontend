import Button from "../../common/button/Button";

function PromoDescription() {
    return (
        <div>
            <h1 className='promo__title'>Учебный проект студента факультета еб-разработки.</h1>
            <p className='promo__description'>Листайте ниже, чтобы узнать больше<br />про этот проект и его создателя.</p>
            <Button textColor='text-white' text='Узнать больше' type='promo' />
        </div>
    )
}

export default PromoDescription;