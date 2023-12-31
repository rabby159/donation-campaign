/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Donations = ({ donation }) => {
  // console.log(donation)
  const { id, image, title, category_name, card_bg, text_bg, category_bg, price } =
    donation || {};

  const bgColor = {
    backgroundColor: card_bg || "#FFFFFF",
  };

  const categoryTextColor = {
    color: text_bg || "#000000",
    backgroundColor: category_bg || "#FFFFFF",
  };

  const textColor = {
    color: text_bg || "#000000",
  };

  const textColorBg = {
    backgroundColor: text_bg || "#FFFFFF",
  };
  return (
    <div className="">
      <div className="card lg:card-side shadow-xl pb-3 lg:pb-0" style={bgColor}>
        <figure>
          <img src={image} alt="img" />
        </figure>
        <div className="items-center flex pl-8">
          <div>
            <h2
              className="max-w-fit py-1 px-2 rounded-md"
              style={categoryTextColor}
            >
              {category_name}
            </h2>
            <h2 className="card-title pt-3">{title}</h2>
            <p className="font-bold pb-3" style={textColor}>
              ${price}
            </p>
            <Link to={`/donationCards/${id}`}>
              <div className="card-actions">
                <button className="btn text-white" style={textColorBg}>
                  View Details
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
