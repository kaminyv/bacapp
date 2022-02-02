import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import '../../../sass/style.scss'
import CatalogList from '../catalogs/CatalogList'
import CatalogFilter from '../catalogs/CatalogFilter'
import BacappApi from '../../api/BacappApi'
import { useCatalog } from '../../hooks/useCatalog'
import { useFetching } from '../../hooks/useFetching'

const Main = () => {
    const [catalogs, setCatalogs] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const sortedSeachedCatalag = useCatalog(catalogs, filter.sort, filter.query)

    useEffect(() => {
        fetchCatalog()
    }, [])

    const [fetchCatalog, isLoading, catalogError] = useFetching(async () => {
        const responce = await BacappApi.getAll()
        setCatalogs(responce.data)
    })

    return (<>
        <Container fluid as="main">
            <CatalogFilter filter={filter} setFilter={setFilter} />
            {catalogError &&
                <h1>Произошла ошибка ${catalogError}</h1>
            }
            {isLoading
                ? <h1>Идеет загрузка...</h1>
                : <CatalogList title={"Салоны красоты"} catalogs={sortedSeachedCatalag} />
            }</Container>
    </>)
}
export default Main
