import { TOffer } from '../../types/TOffer.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';

type OfferCardListProps = {
  offers: TOffer[];
  setActiveOffer: (offer: TOffer | undefined) => void;
  isNearbyOffers: boolean;
};

function OfferCardList({
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

export default OfferCardList;
