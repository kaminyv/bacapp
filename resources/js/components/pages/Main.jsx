import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import '../../../sass/style.scss'
import CatalogList from '../catalogs/CatalogList'
import CatalogFilter from '../catalogs/CatalogFilter'
import BacappApi from '../../api/BacappApi'
import { useCatalog } from '../../hooks/useCatalog'
import { useFetching } from '../../hooks/useFetching'
import { getPage, getPagesArray } from '../../utils/pages'
import Pagination from '../UI/Pagination/Pagination'

const Main = () => {
    const [catalogs, setCatalogs] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [totalPage, setTotalPage] = useState(0)
    const [per_page, setPer_page] = useState(9)
    const [page, setPage] = useState(1)
    const sortedSeachedCatalag = useCatalog(catalogs, filter.sort, filter.query)


    useEffect(() => {
        fetchCatalog()
    }, [page])
    const [fetchCatalog, isLoading, catalogError] = useFetching(async () => {
        const responce = await BacappApi.getAll(page, per_page)
        setCatalogs(responce.data)
        const totalWorkshop = responce.meta.total
        setTotalPage(getPage(totalWorkshop, per_page))
    })
    const changePage = (page) => {
        setPage(page)

    }
    // const [fetchCatalog, isLoading, catalogError] = useFetching(async () => {
    //     const responce = await BacappApi.getAll()
    //     setCatalogs(responce.data)
    // })

    return (<>
        <Container fluid as='main'>
            <CatalogFilter filter={filter} setFilter={setFilter} />
            {catalogError &&
                <h1>Произошла ошибка ${catalogError}</h1>
            }
            {isLoading
                ? <h1>Идеет загрузка...</h1>
                : <CatalogList title={'Салоны красоты'} catalogs={sortedSeachedCatalag} />
            }</Container>
        <Pagination
            page={page}
            totalPage={totalPage}
            changePage={changePage}
        />

    </>)
}
export default Main
