import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItems";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
    description: "원석 벌어야지 까먹으면 안됨", 
    buttonText: "자세히보기"
    },
     {
    title: "마블 노잼", 
    description: "초심 잃었다 ㄹㅇ", 
    buttonText: "자세히보기"
    },
     {
    title: "최애의 아이", 
    description: "목요일 챙겨보기", 
    buttonText: "보러가기"
    }
]


export default function Home () {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=f6d8099df8ef3c1516deabe291afc19f').then(res =>
      res.json()
    )
  ) 


  console.log(isLoading, error, data)

    return <>
    {/* 캐러셀 */}
        <Box>
            <CarouselSlick />
        </Box>

        {/* 특장점 */}
        <HStack w="full" justifyContent="center" py="16" bg="gray.100">
    
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
        <TitleImageSkew
            title="comics"
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
                <Slider {...settings}>
                {data?.data?.results?.map((item, i) => (
                    <Link to={`/comics/${item.id}`}>
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



    </>
}