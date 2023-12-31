/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DonationCards = ({ donation }) => {
  // console.log(donation)
  const { id, image, title, category_name, card_bg, text_bg, category_bg } =
    donation || {};

  const bgColor = {
    backgroundColor: card_bg || "#FFFFFF",
  };

  const textColor = {
    color: text_bg || "#000000",
  };

  const categoryTextColor = {
    color: text_bg || "#000000",
    backgroundColor: category_bg || "#FFFFFF",
  };

  return (
    <div>
      <Link to={`/donationCards/${id}`}>
        <div className="card shadow-xl" style={bgColor}>
          <figure>
            <img src={image} alt="img" />
          </figure>
          <div className="card-body">
            <h2
              className="max-w-fit py-1 px-2 rounded-md"
              style={categoryTextColor}
            >
              {category_name}
            </h2>
            <h2 className="card-title" style={textColor}>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCards;
