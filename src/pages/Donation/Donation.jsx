import { useEffect, useState } from "react";
import Donations from "./Donations";

const Donation = () => {
  const [donationData, setDonationData] = useState([]);
  console.log(donationData)
  const [noDataFound, setNoDataFound] = useState(false);
  const [donationCount, setDonationCount] = useState(4);

  useEffect(() => {
    const donationCategory = JSON.parse(localStorage.getItem("donation"));
    if (donationCategory) {
      setDonationData(donationCategory);
    } else {
      setNoDataFound("No Data Found");
    }
  }, []);

  return (
    <div>
      {noDataFound ? (
        <p className="flex justify-center items-center h-[70vh] font-semibold text-2xl">
          {noDataFound}{" "}
        </p>
      ) : (
        <div className="container mx-auto pt-32">
          <div className=" m-1 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {donationData?.slice(0, donationCount).map((donation) => (
              <Donations key={donation.id} donation={donation}></Donations>
            ))}
          </div>
          <div className="flex justify-center pt-10">
            <div className={donationCount === donationData.length && "hidden"}>
              <button
                onClick={() => setDonationCount(donationData.length)}
                className="btn"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
