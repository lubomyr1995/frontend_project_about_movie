import {createBrowserRouter, Navigate} from "react-router-dom";

import {AuthLayout, ForAuthLayout, MainLayout} from "./layouts";
import {
    FavoritesPage,
    GenresPage,
    LoginPage,
    MovieInfoPage,
    MoviesPage,
    NotFoundPage,
    RegisterPage,
    UserInfoPage
} from "./pages";
import {Authorization, RequiredAuth} from "./hoc";


const router = createBrowserRouter([
    {
        path: '', errorElement: <NotFoundPage/>, element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'movies/:movieId', element: <MovieInfoPage/>},
            {
                path: 'genres', element: <GenresPage/>, children: [
                    {index: true, element: <MoviesPage/>},
                    {path: ':genreId', element: <MoviesPage/>}
                ]
            },
            {
                element: <Authorization><ForAuthLayout/></Authorization>, children: [
                    {path: 'login', element: <LoginPage/>},
                    {path: 'register', element: <RegisterPage/>},
                ]
            },
            {
                element: <RequiredAuth><AuthLayout/></RequiredAuth>, children: [
                    {path: 'favorites', element: <FavoritesPage/>},
                    {path: 'user-info', element: <UserInfoPage/>}
                ]
            },
            {path: '*', element: <NotFoundPage/>}
        ]
    }
]);

export default router;