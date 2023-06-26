import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItems";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { characterList, comicsList, eventsList } from "../api";
import SkeletonList from "../components/SkeletonList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 0.000000000001,
    
};

const featuresLists = [
    {
    title: "원신 출첵해야지", 
    description: "원석 벌어야지 까먹으면 안된다고...(더보기)", 
    buttonText: "자세히보기"
    },
     {
    title: "마블 노잼", 
    description: "초심 잃었나 논란...(더보기)", 
    buttonText: "자세히보기"
    },
     {
    title: "최애의 아이", 
    description: "본방사수...(더보기)",
    buttonText: "보러가기"
    }
]


export default function Home () {
        useEffect(()=>{
            AOS.init()
        },[])
    
  const { data, isLoading } = useQuery('repoData', comicsList);
    
  const { data: eventsData, isLoading: eventsIsLoading } = useQuery('eventsData', eventsList);
  
  const { data: charactersData, isLoading: charactersIsLoading } = useQuery(['charactersData', {numLimit:20, page:1}], characterList);
  
    return( <>
    <HelmetProvider>
        <Helmet>
            <title>마블 홈페이지 입니다.</title>
        </Helmet>

    {/* 캐러셀 */}
        <Box>
            <CarouselSlick />
        </Box>

        {/* 특장점 */}
        <HStack w="full" justifyContent="center" py="16" bg="gray.100" data-aos="fade-up">
    
            <Grid
            gap="4"
            w="7xl" 
            templateColumns={"repeat(3,1fr)"}>
                {
                    featuresLists.map((item, i) => (
                        <CardItems key={i} item={item} />
                        ))
                    }
                
        
            

            </Grid>            
        </HStack> 

        {/* 기울어진 이미지 타이틀 */}
        <div data-aos="fade-up">
        <TitleImageSkew
            title="comics"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis repellendus repellat. Cupiditate, nemo dolore unde repudiandae similique accusamus reiciendis. Quasi et dolore nulla provident eius quibusdam deleniti, distinctio commodi.
            Reprehenderit accusamus molestias corrupti optio, a impedit distinctio magni nihil doloremque eligendi, "
            imgUrl="https://economychosun.com/site/data/img_dir/2019/06/01/2019060100006_0.jpg"            
            />
        </div>
        {/* Comics 컨텐츠 리스트 */}
        
        <VStack w="full" position ="relative" h="400px">
            {/* 한박스 위로 올라오게 하는 밤위지정 */}
            <Box 
                position="absolute" 
                w="7xl" h="450px"
                top={-16}
                bg="white"
                py="8"
                px="2"                
                >   

            {/* 로딩중일때 나옴 */}
            {isLoading ? <SkeletonList/>: ""}

                <Slider {...settings}>
                {data?.data?.results?.map((item, i) => (
                    <Link to={`/comics/${item.id}?type=comics`}>
                        <VStack key={1} w="full" h="full" role="group" cursor="pointer">
                            <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)" }} transition="0.4s">
                                <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                w="full" h="full"
                                objectFIt="cover" 
                                
                                />
                            </Box>
                            <Text _groupHover={{ color: "red.500", fontWeight: "600" }} mt="2" px="2">{item.title.substr(0,38)}</Text>
                        </VStack>
                    </Link>
                ))}
                    </Slider>

            </Box>
        </VStack>

        {/* 이벤트 타이틀 */}
        {/* 기울어진 이미지 타이틀  */}
        <TitleImageSkew
        title="Events"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis repellendus repellat. Cupiditate, nemo dolore unde repudiandae similique accusamus reiciendis. Quasi et dolore nulla provident eius quibusdam deleniti, distinctio commodi.
        Reprehenderit accusamus molestias corrupti optio, a impedit distinctio magni nihil doloremque eligendi, "
        imgUrl="https://economychosun.com/site/data/img_dir/2019/06/01/2019060100006_0.jpg"
        />

         {/* Events 컨텐츠 리스트 */}
         <VStack w="full" position ="relative" h="400px">
            {/* 한박스 위로 올라오게 하는 밤위지정 */}
            <Box 
                position="absolute" 
                w="7xl" h="450px"
                top={-16}
                bg="white"
                py="8"
                px="2"                
                >   
            {/* 로딩중일때 나옴 */}
            {isLoading ? <SkeletonList/>: ""}

                <Slider {...settings}>
                {eventsData?.data?.results?.map((item, i) => (
                    <Link to={`/Events/${item.id}?type=events`}>
                        <VStack key={1} w="full" h="full" role="group" cursor="pointer">
                            <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)" }} transition="0.4s">
                                <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                w="full" h="full"
                                objectFIt="cover" 
                                
                                />
                            </Box>
                            <Text _groupHover={{ color: "red.500", fontWeight: "600" }} mt="2" px="2">{item.title.substr(0,38)}</Text>
                        </VStack>
                    </Link>
                ))}
                    </Slider>

            </Box>
        </VStack>

        {/* 코믹스 타이틀 */}
        {/* 기울어진 이미지 타이틀  */}
        <TitleImageSkew
        title="Character"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis repellendus repellat. Cupiditate, nemo dolore unde repudiandae similique accusamus reiciendis. Quasi et dolore nulla provident eius quibusdam deleniti, distinctio commodi.
        Reprehenderit accusamus molestias corrupti optio, a impedit distinctio magni nihil doloremque eligendi, "
        imgUrl="https://economychosun.com/site/data/img_dir/2019/06/01/2019060100006_0.jpg"
        />

         {/* Comics 컨텐츠 리스트 */}
         <VStack w="full" position ="relative" h="400px">
            {/* 한박스 위로 올라오게 하는 밤위지정 */}
            
            <Box 
                position="absolute" 
                w="7xl" h="450px"
                top={-16}
                bg="white"
                py="8"
                px="2"                
                >   
            {/* 로딩중일때 나옴 */}
            {isLoading ? <SkeletonList/>: ""}

                <Slider {...settings}>
                {charactersData?.data?.results?.map((item, i) => (
                    <Link to={`/Characters/${item.id}?type=characters`}>
                        <VStack key={1} w="full" h="full" role="group" cursor="pointer">
                            <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)" }} transition="0.4s">
                                <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`}
                                w="full" h="full"
                                objectFIt="cover" 
                                
                                />
                            </Box>
                            <Text _groupHover={{ color: "red.500", fontWeight: "600" }} mt="2" px="2">{item.name}</Text>
                        </VStack>
                    </Link>
                ))}
                    </Slider>

            </Box>
        </VStack>



    </HelmetProvider>

    </>)
}