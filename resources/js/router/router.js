import Catalog from "../components/pages/Catalog"
import CatalogWorkshop from "../components/pages/CatalogWorkshop"
import Registre from "../components/pages/Registre"
import Login from "../components/pages/Login"
import User from "../components/pages/User"
import Master from "../components/pages/Master"


export const publicRoutes = [
    { path: 'catalog', element: <Catalog /> },
    { path: 'catalog/:id', element: <CatalogWorkshop /> },
    { path: 'registre', element: <Registre /> },
    { path: 'login', element: <Login /> },
]
export const privateRoutes = [
    { path: 'catalog', element: <Catalog /> },
    { path: 'catalog/:id', element: <CatalogWorkshop /> },
    { path: 'user', element: <User /> },
    { path: 'master', element: <Master /> },
    { path: 'master/:id', element: <Master /> },
]
