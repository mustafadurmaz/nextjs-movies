import React from 'react'
import FeaturedMovie from '@/components/featured-movie';

function MovieContainer({movie}:any) {
  return (
    <div>
      <FeaturedMovie movie={movie} isCompact={false} />
    </div>
  )
}

export default MovieContainer