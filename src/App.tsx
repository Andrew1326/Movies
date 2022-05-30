import React, { Suspense, lazy } from 'react';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { TRoute } from './appTypes';
import SavedProvider from './contexts/SavedContext';
import ScrollToTop from './components/shared/scrollToTop/ScrollToTop';
import CenteredLoader from './components/shared/loader/CenteredLoader';

//* lazy import
const Item = lazy(() => import('./components/screens/item/Item'))
const Home = lazy(() => import('./components/screens/home/Home')) 
const Search = lazy(() => import('./components/screens/search/Search'))
const SearchResults = lazy(() => import('./components/screens/searchResults/SearchResults'))
const NotFound = lazy(() => import('./components/screens/notFound/NotFound'))
const BoxOffice = lazy(() => import('./components/screens/boxOffice/BoxOffice'))
const ComingSoon = lazy(() => import('./components/screens/comingSoon/ComingSoon'))
const Films = lazy(() => import('./components/screens/films/Films'))
const Saved = lazy(() => import('./components/screens/saved/Saved'))
const TVSeries = lazy(() => import('./components/screens/tvSeries/TVSeries'))

//* routes
const routes: TRoute[] = [
  {path: '/', element: <Home />},
  {path: '/tvSeries', element: <TVSeries />, link: 'TVs'},
  {path: '/tvSeries/:id', element: <Item />},
  {path: '/films', element: <Films />, link: 'Films'},
  {path: '/films/:id', element: <Item />},
  {path: '/saved', element: <Saved />, link: 'Saved'},
  {path: '/saved/:id', element: <Item />},
  {path: '/boxOffice', element: <BoxOffice />, link: 'Box Office'},
  {path: '/boxOffice/:id', element: <Item />},
  {path: '/comingSoon', element: <ComingSoon />, link: 'Coming Soon'},
  {path: '/comingSoon/:id', element: <Item />},
  {path: '/search', element: <Search />},
  {path: '/search/results', element: <SearchResults />},
  {path: '/search/results/:id', element: <Item />},
  {path: '*', element: <NotFound />}
]

//* links
const pages = routes.filter(el => el.link)
export const links = pages.map(el => ({name: el.link, to: el.path}))

const App = (): JSX.Element => {
  return (
    <SavedProvider>
      <Navbar />
      <Suspense fallback={<CenteredLoader />}>
        <ScrollToTop />
        <Routes>
          {
            routes.map((el, i) => <Route key={i} path={el.path} element={el.element} />)
          }
        </Routes>
      </Suspense>
    </SavedProvider>
  );
}

export default App;