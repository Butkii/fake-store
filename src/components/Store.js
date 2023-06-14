import { useRef } from 'react';
import { 
    Box, 
    Button, 
    Heading, 
    Stack, 
    Input, 
    Text, 
    Flex, 
    Spacer, 
    Tag,
    SimpleGrid,
} from '@chakra-ui/react';
import Header from './Header';
import Hero from './Hero';
import Categories from './Categories';

const StoreItem = ({title, category}) => {
    return <Box p={4} borderRadius="lg" borderWidth="1px">
        <Text fontSize={12} color={'gray.400'}>
            Category {category}
        </Text>
        <Text mt={2} noOfLines={1} fontSize="large" fontWeight="bold">
            {title}
        </Text>
    </Box>
}

function Store({items, categories}) {
    return (
        <Box backgroundColor="primary.100">
            <Header/>
            <Hero/>
            <Categories categories={categories}/>
            <Box p={4}>
                {/* <SimpleGrid columns={3} spacing={4}>
                    {items.map(item => {
                        return <StoreItem title={item.title} category={item.category} />
                    })}
                </SimpleGrid> */}
            </Box>
        </Box>
    );
}

export default Store;