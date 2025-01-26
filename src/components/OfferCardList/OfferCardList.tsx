import { TOffer } from '../../types/TOffer.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';
import { memo } from 'react';

type OfferCardListProps = {
  offers: TOffer[];
  setActiveOffer: (offer: TOffer | undefined) => void;
  isNearbyOffers: boolean;
};

function OfferCardListTemplate({
  offers,
  setActiveOffer,
  isNearbyOffers,
}: OfferCardListProps) {
  const cardClassWrapper = `${isNearbyOffers ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`;

  return (
    <div className={cardClassWrapper}>
      {offers?.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setCurrentCard={setActiveOffer}
          isNearbyOffer={isNearbyOffers}
        />
      ))}
    </div>
  );
}

const OfferCardList = memo(OfferCardListTemplate);

export default OfferCardList;
