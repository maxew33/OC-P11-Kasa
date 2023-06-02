import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Error from '../pages/error/Error'
import About from '../pages/about/About'
import Lodging from '../pages/lodging/Lodging'

export default function Router() {
    const basePath = process.env.BASE_URL

    const path = [
        {
            path: `${basePath}`,
            element: <Home />,
        },
        {
            path: '*',
            element: <Error />,
        },
        {
            path: `${basePath}about`,
            element: <About />,
        },
        {
            path: `${basePath}lodging/:id`,
            element: <Lodging />,
        },
    ]

    return (
        <Routes>
            {path.map((e, idx) => (
                <Route path={e.path} element={e.element} key={idx} />
            ))}
        </Routes>
    )
}
