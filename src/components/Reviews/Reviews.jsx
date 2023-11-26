
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from 'components/utils/getReviewsInfo';
import ReviewItem from 'components/ReviewItem/ReviewItem';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsDetails, setReviewsDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getReviewsInfo (movieId);
        setReviewsDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);


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


