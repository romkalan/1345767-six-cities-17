type TOfferGalleryProps = {
  images: string[];
};

function OfferGallery({ images }: TOfferGalleryProps) {
  return (
    <div className="offer__gallery">
      <div className="offer__image-wrapper">
        <img
          className="offer__image"
          src="../../../markup/img/room.jpg"
          alt="Photo studio"
        />
      </div>
      {images?.map((image) => (
        <div key={image} className="offer__image-wrapper">
          <img className="offer__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
}

export default OfferGallery;
