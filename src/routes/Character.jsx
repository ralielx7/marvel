import { Box, Grid, GridItem, HStack, Image, Select, Text, VStack } from "@chakra-ui/react";
import { characterList } from "../api";
import { useQuery } from "react-query";
import { useState } from "react";
import SkeletonListCharacter from "../components/SkeletonListCharacter";
import Pagination from "react-js-pagination";
import "./Paging.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SkeletonPage from "../components/SkeletonPage";

export default function Characters() {
    const [numLimit, setNumLimit] = useState(6);
    const [page, setPage] = useState(1);
    console.log(page);
    const {data, isLoading} = useQuery(
        ["characters", {numLimit, page}], 
        characterList
    );
    
        const handleChange = (e) => {
        setNumLimit(e.target.value);
    };

    const total = data?.data?.total
    const handelPageChange = (page) => {
        setPage(page);
    };
    console.log(data);

    return (
    <HelmetProvider>
        <Helmet>
            <title>마블 페이지 - Characters</title>
        </Helmet>
    <VStack w="full" pb="16">
        <Box w="full" h="64" overflow="hidden">
            
            <Image
                w="full"
                h="full"
                objectFit="cover"
                src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg" 
                alt="Characters Img"
            />
        </Box>
        <VStack w="7xl">
            {/* 타이틀 */}
            <HStack w="full" py="16" justifyContent="space-between">
                <Box >
                    <Text>Characters</Text>
                </Box>
                {/* 로딩중일때 나옴 */}
                <Select w="32" onChange={handleChange}>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="30">30</option>
                    <option value="36">36</option>
                </Select>
            </HStack>
            {/* 게시판 */}
            <Grid templateColumns={"repeat(6, 1fr)"} w="full" gap="4">
                {isLoading ?(
                    <SkeletonPage height="300px" num={numLimit} column="6"/>): null}
                {data?.data?.results.map((item, i)=> (
                    <GridItem w="220px" bg="red.500" role="group">
                    <VStack w="full">
                    {/* 1번째 박스 (이미지) */}
                        <Box w="full" h="48" overflow="hidden">
                            <Image                               
                            _groupHover={{
                                transform: "scale(1.2)",
                                transition: "0.45s"
                            }}
                                w="full" h="full" objectFit="cover"
                                   src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                   alt="Characters content"/>
                        </Box>
                            {/* 2번째 박스 타이틀 */}
                            <Box w="full" h="36" position="relative" overflow="hidden">
                                <Box 
                                position="absolute" 
                                top="0" 
                                eft="0" 
                                w="full" 
                                h="full" 
                                bg="gray.800"
                                _groupHover={{
                                    top:"180px",
                                    transition: "0.4s"
                                }}
                                />
                                {/* 오른쪽 밑부분 자르기 위한 빈박스 */}
                                <Box 
                                    position="absolute" 
                                    bottom="-15px"
                                    right="-15px"
                                    bg="white"
                                    w="30px"
                                    h="30px"
                                    transform={"rotate(45deg) scale(2)"}
                                />
                                {/* 타이틀 넣기 위한 부분  */}
                                <Text 
                                    position="absolute" 
                                    top="10px" 
                                    left="10px"
                                    color="white" 
                                    fontSize="24"
                                    fontWeight="semibold"
                                    zIndex={99}
                                    >
                                    {item.name}
                                </Text>
                            </Box>
                        
                    </VStack>
                </GridItem>
                ))}     
            </Grid>
            

            {/* 페이지네이션 */}
            <Box>
            <Pagination
                activePage={page}
                itemsCountPerPage={numLimit}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={handelPageChange}
                />
            </Box>
            </VStack>
        </VStack>
        </HelmetProvider>
        )
}