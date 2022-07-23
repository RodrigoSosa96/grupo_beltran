import { SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";

import { SwiperWrapper, CarrouselText, Wrapper } from "./styled"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Logo from '../svg/Logo';
import Img from '@/components/Img';


const Carrousel = ({ data, text }) => {
  return (
    <Wrapper>
      <SwiperWrapper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        allowTouchMove={false}
        speed={600}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true
        }}
      >
        {
          data.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Img src={item} metadata={{ alt: "Obras del Grupo Beltran" }} />
              </SwiperSlide>
            )
          })
        }
      </SwiperWrapper>
      <CarrouselText>
        <Logo />
        <h2>{text}</h2>
      </CarrouselText>
    </Wrapper>
  )
}

export default Carrousel