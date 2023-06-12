import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube,  } from "react-icons/ai"
import {FaTumblr, FaSnapchatGhost, } from "react-icons/fa"
import {BsPinterest} from "react-icons/bs"
export default function Footer () {
    return <HStack
     w="full" 
     bg="gray.800" 
     h="300px" 
     py="20"
    justifyContent="center" 
    alignItems="flex-start">
        <Grid w={{
        md: "3xl",
        lg: "5xl",
        xl: "7xl"    
        }} gap="4" h="full" templateColumns={{
            sm: "1fr",
            xl: "1fr 1fr 1fr 1fr"}}>
        <GridItem >
            <Box w="52">
            <Image src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0.png" alt="Main Logo"/>
            </Box>
        </GridItem>
            <GridItem w="full">
                <HStack w="full">
                    <VStack color="gray.100" fontWeight={600} alignItems={"flex-start"}>
                        <Text>ABOUT MARVEL</Text>
                        <Text>HELP/FAQS</Text>
                        <Text>CAREERS</Text>
                        <Text>INTERNSHIPS</Text>
                    </VStack>
                    <VStack color="gray.300" fontWeight={600} alignItems={"flex-start"}>
                        <Text>ADVERTISING</Text>
                        <Text>DISNEY+</Text>
                        <Text>MARVELHQ.COM</Text>
                        <Text>REDEEM CODE</Text>
                    </VStack>
                    
                </HStack>
            </GridItem>


            <GridItem w="full">
                <VStack>
                    <HStack spacing="6">
                        <Box w="16">
                            <Image src="https://cdn.marvel.com/content/1x/marvel_insider-topnav-logo-large2x.png" alt="footer Image" />
                        </Box>
                        <VStack alignItems="flex-start">
                            <Text fontWeight={600} color="gray.100">MARVEL INSIDER</Text>
                            <Text color="gray.400">LOREM IPSUM DOLOR SIT AMET.</Text>
                        </VStack>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack spacing="6">
                        <Box w="16">
                            <Image src="https://cdn.marvel.com/content/1x/mu-logo-w-nav-2x-2021-02.png" alt="footer Image" />
                        </Box>
                        <VStack alignItems="flex-start">
                            <Text fontWeight={600} color="gray.100">MARVEL INSIDER</Text>
                            <Text color="gray.400">LOREM IPSUM DOLOR SIT AMET.</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </GridItem>
            <GridItem w="full" >
                <VStack alignitems="flex-start">
                    <Text fontWeight={600} color="gray.100">
                    FOLLOW MARVEL
                    </Text>
                    <Grid
                    color="gray.500"
                    templateColumns={"repeat(4, 1fr)"}
                    gap={6}
                    fontSize="20"
                    >
                        <GridItem>
                            <Box>
                            <AiFillFacebook />
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <AiFillTwitterSquare />
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <AiFillInstagram />
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <FaTumblr />
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <AiFillYoutube />
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <FaSnapchatGhost />
                            </Box>
                        </GridItem>
                        <GridItem>
                            <Box>
                                <BsPinterest />
                            </Box>
                        </GridItem>
                    </Grid>
                </VStack>
            </GridItem>
        </Grid>
    </HStack>
}