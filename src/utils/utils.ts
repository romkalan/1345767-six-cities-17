import { TOffer } from '../types/TOffer.ts';
import { TCityOffers } from '../types/TCityOffers.ts';

const groupOffersByCity = (offersList: TOffer[]) =>
  offersList.reduce((acc, offer) => {
    const { name: cityKey } = offer.city;

    // Проверяем есть ли созданный ключ для конечного объекта
    if (!acc[cityKey]) {
      // Создаем ключ для конечного объекта
      // и присваиваем ему массив оферов
      acc[cityKey] = [offer];
    } else {
      // Добавляем следующий офер если ключ найден
      // Оффер добавляется в существующий массив
      acc[cityKey].push(offer);
    }

    return acc;
  }, {} as TCityOffers);

export { groupOffersByCity };