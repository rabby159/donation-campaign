import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DonationCards from "../../components/DonationCards/DonationCards";

const Home = () => {

    const donations = useLoaderData();
    // console.log(donations)

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto my-20">
        {
            donations?.map(donation => <DonationCards key={donation.id} donation={donation}></DonationCards>)
        }
      </div>
    </div>
  );
};

export default Home;
