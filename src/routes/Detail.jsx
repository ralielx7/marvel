import { Avatar, Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";


export default function Detail() { 
    const {id} = useParams()

    console.log(id)
    const { data } = useQuery('comicsDetail', () =>
    fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=f6d8099df8ef3c1516deabe291afc19f`).then(res =>
      res.json()
        )
    ) 

  return(
    <>
     <Box>
        <VStack 
            w="full" 
            h="650px"
            backgroundImage={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            alignItems="center"
            position="relative"
            >
                <Box position="absolute" top="0" left="0" w="full" h="full" bg="rgba(0, 0, 0, 0.8)"
                />
                <HStack
                    w="7xl" h="full" zIndex={99}
                >
                    <Grid templateColumns="350px 1fr">
                        <GridItem>
                            <Box w="full" h="550px" >
                                <Image src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`} alt="Detail Image"/>
                            </Box>
                        </GridItem>
                        <GridItem>
                            <VStack h="full" 
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing="8" 
                            py="16"
                            >
                                <Text color="white" fontWeight={600} fontSize="xl">
                                    {data.data?.results[0].title} 
                                </Text>
                                <Text color="white" fontSize="lg">
                                    {data?.data?.results[0].variantDescription}
                                </Text>
                                <VStack alignItems="flex-start">
                                    <Text color="white" fontWeight={600} fontSize="xl">Creator</Text>
                                    <HStack w="full" justifyContent="flex-start">
                                        {data?.data?.results[0]?.creators?.items?.map(
                                            (item, i) =>
                                            <VStack>
                                                <Avatar src={item.resourceURI} name={item.name} />
                                                
                                                <Text color="white" key={i}>{item.name}</Text>
                                            </VStack>
                                        )}
                                    </HStack>
                                </VStack>
                            </VStack>
                        </GridItem>
                    </Grid>

                </HStack>
        </VStack>
     </Box>
    </>
    )
}
