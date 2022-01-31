import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs/promises";
import { RootState } from "../store";
import movieApi from '../../common/apis/MovieApi';
import {APIKey} from '../../common/apis/MovieApiKey';

interface Search {
  Poster: string,
  Title: string,
  Type: string
  Year: string
  imdbID: string
}
export  interface moviesProps{
  
   Search: Search[], 
  Response : string,
  totalResults: string,
    Error: string

}

export const FetchAsyncMovies:any = createAsyncThunk('movies/fetchAsyncMovies',
async (term) => {

   const response = await movieApi.get<moviesProps>(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data
 }
);

export const FetchAsyncShows:any = createAsyncThunk('movies/fetchAsyncShows',
async (term) => {
  
   const response = await movieApi.get<moviesProps>(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data
 }
);

export const FetchAsyncMovieOrShowDetails:any = createAsyncThunk('movies/FetchAsyncMovieOrShowDetails',
async (id: string) => {

   const response = await movieApi.get<any>(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data
 }
)

const initialState = {
movies: {} as moviesProps,
shows: {} as moviesProps,
selectedMovieOrShowDetails : {} as any
}
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      removeSelectedMovieOrShow : (state) => {
       state.selectedMovieOrShowDetails = {} as any
      }
    },
    extraReducers:{
      [FetchAsyncMovies.pending] : () => {
        console.log('pending');
      },
      [FetchAsyncMovies.fulfilled] : (state, {payload} : PayloadAction<moviesProps>) => {
        console.log('fetched successfully');
        return{...state, movies:payload}
      },
      [FetchAsyncMovies.rejected] : () => {
        console.log('rejected');
      },
      [FetchAsyncShows.pending] : () => {
        console.log('pending');
      
      },
      [FetchAsyncShows.fulfilled] : (state, {payload} : PayloadAction<moviesProps>) => {
        console.log('payload', payload);
        return{...state, shows:payload}
      },
      [FetchAsyncMovieOrShowDetails.fulfilled] : (state, {payload} :  PayloadAction<moviesProps>) => {
        console.log('fetched successfully');
        return{...state, selectedMovieOrShowDetails:payload}
      },
    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies
export const getAllShows = (state: RootState) => state.movies.shows;
export const getSelectedMovieOrShow = (state:RootState) => state.movies.selectedMovieOrShowDetails


export default movieSlice.reducer;