import { TOffer } from '../../types/TOffer.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';
import { useState } from 'react';

type OfferCardListProps = {
  offers: TOffer[];
};

function OfferCardList({ offers }: OfferCardListProps) {
  const [, setCurrentCard] = useState<TOffer>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers?.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          setCurrentCard={setCurrentCard}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
