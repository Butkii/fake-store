import { 
    Box, 
    Image, 
    Text,
    Flex,
    Button,
 } from "@chakra-ui/react";
 import { Icon } from '@chakra-ui/react'
import { BsArrowRightCircleFill } from "react-icons/bs";

function StoreItem({title, category, image}) {
    return <Box backgroundColor="base.white" p="20px">
        <Flex justifyContent="center" alignContent="center" direction="column">
            <Image 
                src={image} 
                alt='{title} image' 
                objectFit='contain'
                height='200px'
                
            />
            <Text mt={2} fontSize={12} color="text.body2" fontWeight={700}>
                Category {category}
            </Text>
            <Text mt={1} mb={4} noOfLines={1} fontSize={24} fontWeight={700} color="text.title">
                {title}
            </Text>
            <BsArrowRightCircleFill color="secondary.500" size="24px" as={Button}/>
        </Flex>
        
    </Box>
}

export default StoreItem;