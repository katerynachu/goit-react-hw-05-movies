
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from 'components/utils/getReviewsInfo';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import Loader from 'components/Loader/Loader';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsDetails, setReviewsDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getReviewsInfo (movieId);
        setReviewsDetails(data);
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
    <>
    {reviewsDetails && reviewsDetails.results.length > 0 ? (
      <ul>
        {reviewsDetails.results.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    ) : (
      <p>No reviews available for this movie.</p>
    )}
    </>
  );
}


