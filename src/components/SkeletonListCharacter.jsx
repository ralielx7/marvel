import { HStack, Skeleton } from "@chakra-ui/react";

export default function SkeletonListCharacter() {
  return(
     <HStack spacing={2}>
        (<Skeleton width="220px" height="300px" />)
        (<Skeleton width="220px" height="300px" />)
        (<Skeleton width="220px" height="300px" />)
        (<Skeleton width="220px" height="300px" />)
        (<Skeleton width="220px" height="300px" />)
        (<Skeleton width="220px" height="300px" />)
        (<Skeleton width="220px" height="300px" />)
     </HStack>
    )
}