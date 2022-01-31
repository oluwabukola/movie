import { render } from '@testing-library/react';
import React from 'react';
import {useSelector} from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';


 const MovieListing: React.FC  = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log('shows', shows)

//   let renderMovies = movies.Response === 'True' ? (
//   movies.Search.map((movie, index) => {
//     console.log('one movie', movie)
//  return  <h3>{movie}</h3>
//     })
//    ) : (
//     <div className='movies-error'>
//       <h3>{movies.Error}</h3>
//     </div>
//   )
// console.log('renderrrr', renderMovies)
  return(
    <div className='movies-wrapper'>
      <div className='my-5 mx-0'>
        <h2 className='text-fontsec mb-2.5 font-normal'>Movies</h2>
        <div className='grid grid-cols-auto gap-4'>
          {
            movies.Response === 'True' ? (
              movies.Search.map((movie, index) => {
             return  <MovieCard  key={index} data={movie}/>
                }))
                : (
                <div className='movie-error'>
                  <h3>{movies.Error}</h3>
                </div>
              )
          }
          
        </div>
      </div>
     
      <div className='my-5 mx-0'>
        <h2 className='text-fontsec mb-2.5 font-normal'>Shows</h2>
        <div className='grid grid-cols-auto gap-4'>
          {
            shows.Response === 'True' ? (
              shows.Search.map((show, index) => {
             return  <MovieCard  key={index} data={show}/>
                }))
                : (
                <div className='movie-error'>
                  <h3>{shows.Error}</h3>
                </div>
              )
          }
      </div>
    </div>
    </div>
  ) 
};

export default MovieListing;
