import React, { useState, useMemo, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import '../../../sass/style.scss'
import CatalogList from '../catalogs/CatalogList';
import CatalogFilter from '../catalogs/CatalogFilter';
// import Modals from '../UI/Modal/Modal';
import axios from 'axios';
import BacappApi from '../../api/BacappApi';

const Main = () => {
    const [catalogs, setCatalogs] = useState([])
    useEffect(() => {
        fetchCatalog()
    }, [])
    async function fetchCatalog() {
        const catalogs = await BacappApi.getAll()
        setCatalogs(catalogs)
    }
    // function MyVerticallyCenteredModal(props) {
    //     return <Modals {...props} />;
    // }
    // const [modalShow, setModalShow] = useState(false);
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedCatalog = useMemo(() => {
        if (filter.sort) {
            return [...catalogs].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return catalogs
    }, [filter.sort, catalogs])
    const sortedSeachedCatalag = useMemo(() => {
        return sortedCatalog.filter(catalogs =>
            catalogs.master.name.toLowerCase().includes(filter.query.toLowerCase())
            || catalogs.city.toLowerCase().includes(filter.query.toLowerCase())
            || catalogs.address.toLowerCase().includes(filter.query.toLowerCase())

        )
    }, [filter.query, sortedCatalog])

    return (
        <Container>
            <CatalogFilter filter={filter} setFilter={setFilter} />
            <CatalogList title={"Онлайн запись в вашем городе"} catalogs={sortedSeachedCatalag} />
        </Container>
    )
}
export default Main
