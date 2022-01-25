import { useMemo } from 'react'


export const useSortedCatalog = (catalogs, sort) => {
    const sortedCatalog = useMemo(() => {
        if (sort) {
            return [...catalogs].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return catalogs
    }, [sort, catalogs])
    return sortedCatalog
}
export const useCatalog = (catalogs, sort, query) => {
    const sortedCatalog = useSortedCatalog(catalogs, sort)
    const sortedSeachedCatalag = useMemo(() => {
        return sortedCatalog.filter(catalogs =>
            catalogs.master.name.toLowerCase().includes(query.toLowerCase())
            || catalogs.city.toLowerCase().includes(query.toLowerCase())
            // || catalogs.address.toLowerCase().includes(query.toLowerCase())
            || catalogs.rating.toString().includes(query)

        )
    }, [query, sortedCatalog])
return sortedSeachedCatalag
}
