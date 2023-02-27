import IndividualIntervalsExample from "../components/Carousel/Carousel";
import { Nav } from "../components/Navbar/Nav";
import {
  ImageSection,
  contentDetails,
  HappyToConnect,
  Empty,
  ProfileCards,
  // CustomRadioButtons
} from "../components/Section/Section";




const Home = () => {
  return (
    <>
      <Nav />
      <IndividualIntervalsExample />
      <Empty /> 
      <ImageSection ImageContainer={contentDetails} />
      <HappyToConnect />
      {/* <ProfileCard /> */}
      <ProfileCards/>
    </>
  );
};

export default Home;
