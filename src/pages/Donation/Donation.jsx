import { useEffect, useState } from "react";
import Donations from "./Donations";


const Donation = () => {
  const [donationData, setDonationData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {

    const donationCategory = JSON.parse(localStorage.getItem('donation'));
    if(donationCategory){
      setDonationData(donationCategory);
    }
    else{
      // console.log('no data found')
      setNoDataFound('No Data Found');
    }
  }, [])


    return (
        <div>
            {
              noDataFound? <p className="flex justify-center items-center h-[70vh] font-semibold text-2xl">{noDataFound} </p> 
              :
              <div className="container mx-auto pt-32">
                <div className=" m-1 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                      donationData?.map(donation => <Donations key={donation.id} donation={donation}></Donations>)
                    }
                </div>
              </div>
            }
        </div>
    );
};

export default Donation;