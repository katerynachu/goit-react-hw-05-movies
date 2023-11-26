import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'components/utils/getCastInfo';
import CastItem from 'components/CastItem/CastItem';
import Loader from 'components/Loader/Loader';

export default function Cast() {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getCastInfo(movieId);
        setCastDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }finally{
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <Loader/>
    );
  }
  return (
    <ul>
      {castDetails &&
        castDetails.cast.map((cast) => (
          <CastItem key={cast.id} cast={cast} />
        ))}
    </ul>
  );
}

