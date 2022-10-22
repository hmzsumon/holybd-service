import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Banner.css';

import img2 from '../../../assets/images/Banners/1-1.jpg';
import img1 from '../../../assets/images/Banners/1.jpg';
import img3 from '../../../assets/images/Banners/2.jpg';
import img4 from '../../../assets/images/Banners/3.jpg';
import img11 from '../../../assets/images/Banners/4.jpg';

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const Banner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [img1, img2, img3, img4, img11];

  return (
    <>
      <section className=' mt-4 h-full  w-full rounded-sm shadow relative overflow-hidden'>
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img
              draggable='false'
              className='h-full md:h-[80%]  w-full object-cover'
              src={el}
              alt='banner'
              key={i}
            />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
