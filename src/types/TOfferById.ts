import { TOffer } from './TOffer.ts';

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type TOfferById = Omit<TOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
};
