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

const StoreItem = ({title, category}) => {
    return <Box p={4} borderRadius="lg" borderWidth="1px">
        <Text fontSize={12} color={'gray.400'}>
            Category {category}
        </Text>
        <Flex alignItems="center">
            <Text noOfLines={1} fontSize="large" fontWeight="bold">
                {title}
            </Text>
            <Spacer />
        </Flex>
    </Box>
}

function Store({items, onItemAdd}) {
    return (
        <Box p={4}>
            <SimpleGrid columns={3} spacing={4}>
                {items.map(item => {
                    return <StoreItem title={item.title} category={item.category} />
                })}
            </SimpleGrid>
        </Box>
    );
}

export default Store;