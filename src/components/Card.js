import "./Card.css";

export const Card = ({orderTypes}) => {
  return (
    <div className="too-anchor">
      <a href={orderTypes.href}>
          <img
            alt={orderTypes.heading}
            src={orderTypes.imgSrc}
          />
        <div className="too-heading">
          <h1>{orderTypes.heading}</h1>
          <p>{orderTypes.description}</p>
        </div>
      </a>
    </div>
  );
};
