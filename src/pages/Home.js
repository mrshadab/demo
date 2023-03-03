import IndividualIntervalsExample from "../components/Carousel/Carousel";
import { Nav } from "../components/Navbar/Nav";
import { Empty } from "../components/emptyDiv/EmptyDiv";
import { HappyToConnect } from "../components/happyToConnectPopup/HappyPopup";
import { ProfileCards } from "../components/profileCards/profileCard";
import { ImageSection } from "../components/motorDetailsImage/motorImage";

const Home = () => {
  return (
    <>
      <Nav />
      <IndividualIntervalsExample />
      <Empty />
      <ImageSection />
      <HappyToConnect />
      <ProfileCards />
    </>
  );
};

export default Home;
