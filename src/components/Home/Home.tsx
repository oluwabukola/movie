import React, { useEffect } from 'react';
import { useAppDispatch } from '../../features/store.hooks';
import MovieListing from '../MovieListing/MovieListing';

import {FetchAsyncMovies, FetchAsyncShows } from '../../features/movies/movieSlice';
import { moviesProps } from '../../features/movies/movieSlice';



 const Home: React.FC  = () => {
   const dispatch = useAppDispatch();
   const movieText = "Harry";
   const showText =  "Friends"
   useEffect(() =>{
     dispatch(FetchAsyncMovies(movieText));
     dispatch(FetchAsyncShows(showText));
     
   }, [dispatch]);
  return (
  <div>
    <div></div>
    <MovieListing />
  </div>
  )
};

export default Home;
