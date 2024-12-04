import { TOffer } from '../../types/TOffer.ts';
import OfferCard from '../OfferCard/OfferCard.tsx';

type OfferCardListProps = {
  offers: TOffer[];
};

function OfferCardList({ offers }: OfferCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers?.map(({ id, ...offer }) => <OfferCard key={id} offer={offer} />)}
    </div>
  );
}

export default OfferCardList;
