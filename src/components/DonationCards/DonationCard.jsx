/* eslint-disable react/prop-types */
import DonationCards from "./DonationCards";

const DonationCard = ({ donations }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-1 my-20">
        {donations?.map((donation) => (
          <DonationCards key={donation.id} donation={donation}></DonationCards>
        ))}
      </div>
    </div>
  );
};

export default DonationCard;
