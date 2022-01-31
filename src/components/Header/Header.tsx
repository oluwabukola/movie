import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import user from '../../images/user.png';
import { useAppDispatch } from '../../features/store.hooks';
import { FetchAsyncMovies, FetchAsyncShows } from '../../features/movies/movieSlice';




 const Header: React.FC = () => {
   const dispatch = useAppDispatch()
  
   const [term, setTerm] = useState <string>('');
   const formChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm( event.target.value );
};
   const submitHandler =(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(term === '') return alert('please enter serch term')
    dispatch(FetchAsyncMovies(term));
    dispatch(FetchAsyncShows(term));
    setTerm('')
   }
  return (
    <div className='bg-secondary h-[72px] flex items-center justify-between py-0 px-10'>
     
      <div className="text-white text-xl font-semibold"> <Link to='/'>Movie App</Link></div>
      <div className='w-1/2 flex justify-center '>
        <form  className='flex justify-center w-3/4' onSubmit={submitHandler} >
          <input type='text' className='text-[18px] w-full pt-1 pr-1 pb-1 pl-2 h-[38px] outline-none' 
          name='search' placeholder='search movies or shows'
          onChange={formChange} />
          <button type='submit' className='py-0 px-2 text-xl cursor-pointer h-[38px]'>
            <i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className='w-12 h-12'>
        <img src={user} alt="user" />
      </div>
    </div>
  )
};

export default Header;
