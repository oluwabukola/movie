import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router';
import { FetchAsyncMovieOrShowDetails, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { useAppDispatch } from '../../features/store.hooks';
 

// In order to implement that, I'd apply my type to the hook when calling it.

interface idParams{
  imdbID: string;
}

 const MovieDetails: React.FC  = () => {
   const dispatch = useAppDispatch();
   const data = useSelector(getSelectedMovieOrShow);
   console.log(data)
  const {imdbID} = useParams <idParams>();
  useEffect(() => {
    dispatch(FetchAsyncMovieOrShowDetails(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch,imdbID])
  return( 
  <div className='flex justify-evenly py-5 px-0 text-white font-normal'>
    
    {Object.keys(data).length == 0 ?
    (<div>...Loading</div>) :
    (<>
    <div className='section-left'>
      <div className='[text-40px] text-white'>
        {data.Title}
      </div>
      <div className='pl-1 mt-5 text-fontsec flex'>
        <span className='mr-5'>IMDB Rating <i className='fa fa-star text-star'></i>: {data.imdbRating}</span>
        <span className='mr-5'>IMDB Votes <i className='fa fa-thumbs-up text-thumbs '></i>: {data.imdbVotes}</span>
        <span className='mr-5'>Runtime <i className='fa fa-film text-film'></i>: {data.Runtime}</span>
        <span className='mr-5'>Year<i className='fa fa-calendar text-calendar'></i>: {data.Year}</span>
      </div>
      <div className='mt-5 leading-7'>{data.Plot}</div>
      <div className='movie-info'>
        <div >
          <span className='py-2 px-0 text-white font-semibold w-[100px] inline-block'>Director</span>
          <span className='text-fontsec'>{data.Director}</span>
        </div>
        <div>
          <span className='py-2 px-0 text-white font-semibold w-[100px] inline-block'>Stars</span>
          <span className='text-fontsec'>{data.Actors}</span>
        </div>
        <div>
          <span className='py-2 px-0 text-white font-semibold w-[100px] inline-block'>Genres</span>
          <span className='text-fontsec'>{data.Genre}</span>
        </div>
        <div>
          <span className='py-2 px-0 text-white font-semibold w-[100px] inline-block'>Languages</span>
          <span className='text-fontsec'>{data.Language}</span>
        </div>
        <div>
          <span className='py-2 px-0 text-white font-semibold w-[100px] inline-block'>Awards</span>
          <span className='text-fontsec'>{data.Awards}</span>
        </div>
      </div>
    </div>
    <div className='ml-8 w-full'>
      <img src={data.Poster} alt={data.Title} className='w-full '/>
    </div>
    </>)
    }
    
  </div>
  )
};

export default MovieDetails;
