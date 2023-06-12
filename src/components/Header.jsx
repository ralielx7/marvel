import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { Link } from "react-router-dom";


export default function Header() {
    const [scroll, setScroll] = useState(true)
    useEffect(() => {
        document.addEventListener("wheel", (event) =>  {
            if(event.deltaY < 0 ) {
                //휠 스크롤 올림
                setScroll(true);
            }else if (event.deltaY > 0){
                //휠 스크롤 내림
                setScroll(false)
            }
        }
        )
    }) 
    const GNB = [
        {title: "home", href : "/"},
        {title: "characters", href : "/characters"},
        {title: "comics", href : "/comics"},
        {title: "events", href: "/events"}
    ]
    const { colorMode, toggleColorMode } = useColorMode();
    return <Stack 
    transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
    transition={"0.4s"}
    bg="gray.800"
    w="full" 
    h="60px" 
    color="white" 
    fontWeight={600} 
    fontsize="20px" 
    alignItem="center" 
    justifyContent="center"
    boxShadow="sm"
    position="fixed"
    zIndex={99}
    >
        <HStack
        justifyContent="space-between"
        w="7xl"
        h="full"        
        >
            <HStack>
                <Box w={24}>
                    <Image src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-0.png" alt="Main Logo"/>
                </Box>
                <HStack spacing="4" textTransform="uppercase">
                    {
                        GNB.map((item)=>(
                            <Link to={item.href} key={item.title} aria-label={item.title}>
                                <Text>{item.title}</Text>
                                </Link>
                        ))
                    }
                        
                        
                </HStack>
            </HStack>
            <Button onClick={toggleColorMode}>
                {
                    colorMode ==="light" ? <BsFillSunFill/> : <BsFillMoonFill />
                }
                
            </Button>
        </HStack>        
    </Stack>
}