import React from 'react'
import MovieContainer from '@/containers/movie';
import Movies from "@/mocks/movies.json";
import { notFound } from 'next/navigation';

function MoviePage({params}:any) {
  const movieDetail= Movies.results.find((movie)=>movie.id === +params.id);
  
  if(!movieDetail) {
    notFound()
  }
    
  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  )
}

export default MoviePage