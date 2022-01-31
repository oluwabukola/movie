import React, { Children } from 'react';
import { Link } from 'react-router-dom';

interface moviecardProps {
data: {
  Poster: string,
  Title: string,
  Type: string
  Year: string
  imdbID: string
} 
}

 const MovieCard: React.FC<moviecardProps>  = ({data}) => {
  //  console.log('dataa', data)
  return (
    <div className='bg-secondary cursor-pointer transition-all duration-300 hover:scale-110 hover:transition-all
    hover:duration-300'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='card-inner'> 
        <div className='h-72'>
          <img   className='w-full h-full' src={data.Poster} alt={data.Title}/>
         </div>
         <div className='p-5'>
           <div className='text-white'>
             <h4 className='text-[22px] fon-normal mb-2.5'> {data.Title}</h4>
             <p>{data.Year}</p>
           </div>
         </div>
      </div>
      </Link>
      </div>
  ) ;
};

export default MovieCard;
