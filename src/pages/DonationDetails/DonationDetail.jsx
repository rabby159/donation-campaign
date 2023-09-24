/* eslint-disable react/prop-types */

const DonationDetail = ({ donation }) => {
  // console.log(donation);

  const { image, title,  text_bg, price, description } =
    donation || {};

    const textColorBg ={
           backgroundColor : text_bg || '#FFFFFF'
    };

  return (
    <div className="py-32">
      <div className=" h-[60vh]">
        <img className="w-full h-[60vh]" src={image}></img>
        <div className="">
            <div className="w-full h-32 -mt-5 bg-gray-600 bg-opacity-90">

            </div>
          <div className=" -mt-20 pl-5 ">
            <button className="btn text-white" style={textColorBg}>Donate ${price}</button>
          </div>
        </div>
        <div className="py-20">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="pt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;
