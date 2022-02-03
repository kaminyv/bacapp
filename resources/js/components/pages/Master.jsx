import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BacappApi from '../../api/BacappApi'
import { useParams } from 'react-router-dom'
import { useFetching } from './../../hooks/useFetching'
import MasterServece from './../catalogs/MasterServece';
import MasterCard from './../catalogs/MacterCard'


const Master = () => {
    const [workshop, setWorkshop] = useState({})
    const [master, setMaster] = useState({})
    const [service, setService] = useState([])
    const params = useParams()
    // console.log(params)
    useEffect(() => {
        fetchWorkshop(params.id)
    }, [])

    const [fetchWorkshop, isLoading, workshopError] = useFetching(async (id) => {
        const responce = await BacappApi.getMaster(id)
        setWorkshop(responce.data)
        setMaster(responce.data.master)
        setService(responce.data.service)
    })

    // console.log(workshop)
    // console.log(master)
    // console.log(service)


    return (
        <Container fluid as="section" className='master'>
            {workshopError &&
                <h1>Произошла ошибка ${workshopError}</h1>
            }
            {isLoading
                ? <h1>Идеет загрузка...</h1>
                : <>
                    <div className='master__wrap'>
                        <img className='master__img' src={`${workshop.cover}`} />
                        <p>Салон</p>
                        <p>Город: <strong>{workshop.city}</strong></p>
                        <p>Адрес: <strong>{workshop.address}</strong></p>
                    </div>
                    <MasterCard master={master} key={master.id} />
                    <MasterServece service={service} key={catalog.id} />
                </>
            }
        </Container>
    );
}

export default Master;
