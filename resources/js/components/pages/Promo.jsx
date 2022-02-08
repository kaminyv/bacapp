import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const Promo = () => {
    const navigate = useNavigate();
    return (
        <section className='promo'>
            <h1 className='promo__title'>Онлайн запись в вашем городе </h1>
            <Button
                onClick={() => navigate(`/catalog`)}
                variant='secondary'
                className=' m-auto'>
                Найти
            </Button>
            <ul className='promo__list'>
                <li className='promo__item'> город</li>
                <li className='promo__item'> студию</li>
                <li className='promo__item'> мастера</li>
                <li className='promo__item'> услугу</li>
            </ul>
        </section>
    )
}
export default Promo
