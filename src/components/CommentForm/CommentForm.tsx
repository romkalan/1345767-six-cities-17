import { ChangeEvent, FormEvent, Fragment, memo, useState } from 'react';
import { AuthorizationStatus, RatingStars } from '../../consts/const.ts';
import { postNewComment } from '../../store/api-actions.ts';
import { useParams } from 'react-router-dom';
import { TCommentData } from '../../types/TComment.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { getAuthorizationStatus } from '../../store/userProcess/selectors.ts';

const initialFormState: TCommentData = { offerId: '', comment: '', rating: 0 };

function CommentFormTemplate(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const { id: offerId } = useParams();
  const [formState, setFormState] = useState<TCommentData>(initialFormState);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isButtonFormDisabled = !formState.comment || !formState.rating;

  const handleFormChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!offerId) {
      return;
    }

    const commentData: TCommentData = {
      offerId,
      comment: formState.comment,
      rating: +formState.rating,
    };

    setFormState(initialFormState);
    dispatch(postNewComment(commentData));
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RatingStars.map((number) => (
          <Fragment key={number}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              checked={number === +formState.rating}
              value={number}
              id={`${number}-stars`}
              type="radio"
              onChange={handleFormChange}
            />
            <label
              htmlFor={`${number}-stars`}
              className="reviews__rating-label form__rating-label"
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.comment}
        onChange={handleFormChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isButtonFormDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

const CommentForm = memo(CommentFormTemplate);

export default CommentForm;
