import "./Card.css";

type CardTextProps = {
  description: string;
  title?: string;
};

export const CardText = ({ description, title }: CardTextProps) => {
  const truncatedDescription =
    description.length > 130 ? `${description.slice(0, 300)}...` : description;

  return (
    <div className="card-text-container">
      <p className="card-text">{`${
        title ? `${title}:\n` : ""
      }${truncatedDescription}`}</p>
    </div>
  );
};
