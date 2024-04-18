import React from 'react'
import MovieContainer from '@/containers/movie';
import Movies from "@/mocks/movies.json";
import { notFound } from 'next/navigation';

function MoviePage({params, searchParams}:any) {
  const movieDetail= Movies.results.find((movie)=>movie.id === +params.id);

  console.log("searchParams",searchParams);
  
  
  if(!movieDetail) {
    notFound()
  }

  if(searchParams.error==="true"){
    throw new Error("Error happened");
  }
    
  return (
    <div>
      <MovieContainer movie={movieDetail} />
    </div>
  )
}

export default MoviePage