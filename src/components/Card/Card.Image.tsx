import "./Card.css";

type CardImageProps = {
  page: string | undefined;
  url: string;
};

export const CardImage = ({ page, url }: CardImageProps) => {
  const isValidImage = /\.(jpg|jpeg|png|gif)$/i.test(url);

  return (
    <div className={`${page}-background-load card-img-container`}>
      {isValidImage ? (
        <img className="card-img" src={url} alt="random-image"></img>
      ) : (
        <img
          className="card-img"
          src="/src/assets/image-not-found.jpg"
          alt="random-image"
        />
      )}
    </div>
  );
};
