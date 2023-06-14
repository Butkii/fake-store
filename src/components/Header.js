import {
    Box, 
    Heading,
    Flex,
    Spacer,
    Text,
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react'
import { 
    BsTelephone, 
    BsTruck, 
    BsSearch,
    BsHeart,
    BsCart,
    BsBell,
    BsPerson,
} from 'react-icons/bs'

function Header() {
    return <Box>
        <Box bgColor="base.white" height={75}>
            <Flex paddingX={12} paddingY={4}>
                <Heading fontWeight={700} color="secondary.500" size="lg">Dealerz.</Heading>
                <Spacer/>
                <Icon mx={2} my={2} color="text.title" as={ BsTelephone }/>
                <Text my={1} mr={4} color="text.title" fontWeight={500}> Call Center </Text>
                <Icon mx={2} my={2} color="text.title" as={ BsTruck }/>
                <Text my={1} mr={4} color="text.title" fontWeight={500}> Shipping and Returns </Text>
            </Flex>
        </Box>
        <Box height={75}>
            <Flex paddingX={12} paddingY={4} alignItems="center">
                <Text my={1} mr={4} color="text.title" fontWeight={500} size={16}> 
                    Shop 
                </Text>
                <Text my={1} mr={4} color="text.title" fontWeight={500} size={16}> 
                    Promo 
                </Text>
                <Text my={1} mr={4} color="text.title" fontWeight={500} size={16}> 
                    About
                </Text>
                <Text my={1} mr={4} color="text.title" fontWeight={500} size={16}> 
                    Blog 
                </Text>
                <Spacer/>
                <Box width='40%' bgColor="base.white" borderRadius={4} padddingY={17} paddingX={30}>
                    <Flex alignItems={'left'} justifyContent={'space-between'}>
                        <Text noOfLines={1} my={1} mr={4} color="text.body2" fontWeight={400} size={16}> 
                            Search what you need 
                        </Text>
                        <Icon mx={2} my={2} color="text.body2" as={ BsSearch }/>
                    </Flex>
                </Box>
                <Spacer/>
                <Icon my={2} color="text.title" w={10} h={17} as={ BsHeart }/>
                <Icon my={2} color="text.title" w={10} h={17} as={ BsCart }/>
                <Icon my={2} color="text.title" w={10} h={17} as={ BsPerson }/>
                <Icon my={2} color="text.title" w={10} h={17} as={ BsBell }/>
            </Flex>
        </Box>
    </Box>
}

export default Header;