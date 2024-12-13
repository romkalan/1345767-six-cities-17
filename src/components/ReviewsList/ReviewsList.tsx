import Review from '../Review/Review.tsx';
import { TComment } from '../../types/TComment.ts';
import { sortByDate } from '../../utils/utils.ts';

type ReviewsListProps = {
  comments: TComment[];
};

function ReviewsList({ comments }: ReviewsListProps): JSX.Element {
  const tenComments = comments.slice(0, 10);
  const sortedComments = sortByDate(tenComments);

  return (
    <ul className="reviews__list">
      {sortedComments.map((comment) => (
        <Review key={comment.id} userComment={comment} />
      ))}
    </ul>
  );
}

export default ReviewsList;
