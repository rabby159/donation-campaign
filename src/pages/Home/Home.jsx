import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import DonationCard from "../../components/DonationCards/DonationCard";

const Home = () => {

    const donations = useLoaderData();
    // console.log(donations)

  return (
    <div>
      <Banner></Banner>
      <DonationCard donations={donations}></DonationCard>
    </div>
  );
};

export default Home;
