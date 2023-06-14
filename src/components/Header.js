import {
    Box, 
    Heading,
    Flex,
    Spacer,
    Text,
    Button,
    Input,
    Link,
} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';
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
        <Box bgColor="base.white">
            <Flex paddingX={20} paddingY={6}>
                <Heading fontWeight={700} color="secondary.500" size="xl">Dealerz.</Heading>
                <Spacer/>
                <Icon mx={2} my={2} color="text.title" as={ BsTelephone }/>
                <Text my={1} mr={4} color="text.title" fontWeight={500}> Call Center </Text>
                <Icon mx={2} my={2} color="text.title" as={ BsTruck }/>
                <Text my={1} mr={4} color="text.title" fontWeight={500}> Shipping and Returns </Text>
            </Flex>
        </Box>
        <Box>
            <Flex paddingX={20} paddingY={6} alignItems="center">
                <Link as={RouterLink }to='/shop' my={1} mr={4} color="text.title" fontWeight={500} size={16}> 
                    Shop 
                </Link>
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
                        <Input border="0" noOfLines={1} my={1} mr={4} color="text.body2" fontWeight={400} size={16} placeholder="Search what you need">  
                        </Input>
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