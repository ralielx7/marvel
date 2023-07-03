import { Grid, Skeleton } from "@chakra-ui/react";

export default function SkeletonPage({
    num, 
    width="180px", 
    height="240px",
    column}) {
  return(
     <Grid 
     gap="4"
     w="full" 
     px="2" 
     templateColumns={`repeat(${column}, 1fr)`}>
        {
            Array(num)
            .fill("")
            .map((_, i) => (
                <Skeleton key={i} w={width} h={height} />
            ))
       }
     </Grid>
    )
}
