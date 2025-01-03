export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TComment = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
};

export type TCommentData = {
  offerId: string;
  comment: string;
  rating: number;
};
