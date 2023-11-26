import React from 'react';
import { ReviewBlock, ReviewHeader } from './ReviewItem.style';

const ReviewItem = ({ review }) => {
  const rating = review.author_details.rating;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <span
          key={i}
          style={{ color: i <= rating ? 'gold' : 'grey', fontSize: '20px' }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <ReviewBlock>
      <ReviewHeader>
        {review.author} <span>{renderStars()}</span>
      </ReviewHeader>
      <p>{review.content}</p>
    </ReviewBlock>
  );
};

export default ReviewItem;

