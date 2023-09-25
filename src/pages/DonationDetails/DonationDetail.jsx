/* eslint-disable react/prop-types */

import swal from "sweetalert";

const DonationDetail = ({ donation }) => {
  // console.log(donation);

  const { id, image, title,  text_bg, price, description } =
    donation || {};

    const textColorBg ={
           backgroundColor : text_bg || '#FFFFFF'
    };

    const handleDonate = () =>{
        const addDonation = [];

        const donationCategory = JSON.parse(localStorage.getItem('donation'));

        if(!donationCategory){
            addDonation.push(donation);
            localStorage.setItem('donation', JSON.stringify(addDonation));
            swal("Good job!", "Donation Successful!", "success");
        }
        else{

          const isExits = donationCategory?.find(donation => donation.id === id);

          if(!isExits){
            
            addDonation.push(...donationCategory, donation);
            localStorage.setItem('donation', JSON.stringify(addDonation));
            swal("Good job!", "Donation Successful!", "success");

          }
          else{
            swal("Error!", "Already Donation done in this package", "error");
          }


        }
    }

  return (
    <div className="py-32">
      <div className=" h-[60vh]">
        <img className="w-full h-[60vh]" src={image}></img>
        <div className="">
            <div className="w-full h-32 -mt-5 bg-gray-600 bg-opacity-90">

            </div>
          <div className=" -mt-20 pl-5 ">
            <button onClick={handleDonate} className="btn text-white" style={textColorBg}>Donate ${price}</button>
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
