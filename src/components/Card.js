import "./Card.css";

export const Card = ({ orderTypes }) => {
  return (
    <div className="too-anchor">
      <a href={orderTypes.href} className="too-a">
        <div className="too-image">
          <div className="too-image-div"></div>
          <img alt={orderTypes.heading} src={orderTypes.imgSrc} />
        </div>
          <div className="too-heading">
            <p className="title">{orderTypes.heading}</p>
            <p className="subtitle">{orderTypes.description}</p>
          </div>
      </a>
    </div>
  );
};
