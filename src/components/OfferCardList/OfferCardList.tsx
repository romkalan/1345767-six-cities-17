import { TOffer } from '../../types/TOffer.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';

type OfferCardListProps = {
  offers: TOffer[];
  setActiveOffer: (offer: TOffer) => void;
};

function OfferCardList({ offers, setActiveOffer }: OfferCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers?.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setCurrentCard={setActiveOffer}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
