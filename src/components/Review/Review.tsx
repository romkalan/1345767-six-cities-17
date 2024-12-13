import { TComment } from '../../types/TComment.ts';
import { RatingStyle } from '../../consts/const.ts';

type ReviewProps = {
  userComment: TComment;
};

function Review({ userComment }: ReviewProps): JSX.Element {
  const { user, comment, rating, date } = userComment;
  const ratingStyle = RatingStyle(rating);

  const currentDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
  });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingStyle }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {formattedDate.format(currentDate)}
        </time>
      </div>
    </li>
  );
}

export default Review;
