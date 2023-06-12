import { Box, HStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return <Box w="full" h="full">
        <Slider {...settings}>
            <HStack 
            w="full" 
            h="450px" 
            backgroundImage={'url("https://wallpapercave.com/wp/wp9545805.jpg")'}
            backgroundSize="cover"
            >
            </HStack>
            <HStack 
            w="full" 
            h="450px" 
            backgroundImage={'url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700547729-1200x675-optimized.jpg")'}
            backgroundSize="cover"
            >
            </HStack>
        </Slider>
    </Box>
}