import React from 'react';
import CatalogItem from './CatalogItem';
const CatalogList = ({ catalogs,title }) => {
    if (!catalogs.length) {
        return <h2 className='d-flex justify-content-center my-5'> Услуги не найдены</h2>;
    }
    return (<>
         <h1 className='my-4' >{title}</h1>
        {catalogs.map(catalog =>
            <CatalogItem catalog={catalog} key={catalog.id}
            />
        )}</>)
}
export default CatalogList
