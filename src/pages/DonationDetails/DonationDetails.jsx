import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "./DonationDetail";

const DonationDetails = () => {
  const [donation, setDonation] = useState({});

  const { id } = useParams();
  // console.log(id);

  const donations = useLoaderData();
  // console.log(donations);

  useEffect(() => {
    const donationFind = donations?.find((donation) => donation.id == id);
    // console.log(donationFind)
    setDonation(donationFind);
  }, [donations, id]);

  return (
    <div className="container mx-auto">
      <div className="mx-1">
        <DonationDetail donation={donation}></DonationDetail>
      </div>
    </div>
  );
};

export default DonationDetails;
