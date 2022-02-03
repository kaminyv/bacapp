import React from 'react';
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ totalPage, page, changePage }) => {
    let pagesArray = getPagesArray(totalPage)
    return (<div className='pagination'>
        {pagesArray.map(p =>
            <span
                onClick={() => changePage(p)}
                className={page === p ? 'pagination__item pagination__item--activ ' : 'pagination__item'}
                key={p}>
                {p}
            </span>
        )}
    </div>)
}
export default Pagination
