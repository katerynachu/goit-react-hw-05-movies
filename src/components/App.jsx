import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Loader from './Loader/Loader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';

const Home = lazy(() => import('../pages/HomePage'));
const MovieDetails = lazy(() => import('../pages/MoviePage'));
const SearchResults = lazy(() => import('../pages/SearchPage'));

export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Suspense>
      <Footer/>
      <GlobalStyle/>
    </>
  );
};
