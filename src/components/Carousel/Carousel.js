import Carousel from "react-bootstrap/Carousel";
import CarouselStyle from "./Carousel.module.css";

function IndividualIntervalsExample() {
  return (
    <Carousel className={CarouselStyle.MainCarouselDiv}>
      <Carousel.Item interval={1000} className={CarouselStyle.carouselItem}>
        <img
          className={`d-block w-100 ${CarouselStyle.imgStyle}`}
          src="./images/CarouselImage/home-banner-csr-web-22-1.jpg"
          alt="First slide"
          // height={"600"}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000} className={CarouselStyle.carouselItem}>
        <img
          className={`d-block w-100 ${CarouselStyle.imgStyle}`}
          src="./images/CarouselImage/home-mentor22-banner-web.jpg"
          alt="Second slide"
          // height={"600"}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000} className={CarouselStyle.carouselItem}>
        <img
          className={`d-block w-100 ${CarouselStyle.imgStyle}`}
          src="./images/CarouselImage/home-banner-superpower-hers-web.jpg"
          alt="Third slide"
          // height={"600"}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000} className={CarouselStyle.carouselItem}>
        <img
          className={`d-block w-100 ${CarouselStyle.imgStyle}`}
          src="./images/CarouselImage/home-safari-banner-17jan22-web.jpg"
          alt="Third slide"
          // height={"600"}
        />
      </Carousel.Item>
      <Carousel.Item interval={3000} className={CarouselStyle.carouselItem}>
        <img
          className={`d-block w-100 ${CarouselStyle.imgStyle}`}
          src="./images/CarouselImage/punch-banner-04oct21-web.jpg"
          alt="Third slide"
          // height={"600"}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
