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
} from '@chakra-ui/react';

const StoreItem = ({title, price}) => {
    return <Box p={4} borderRadius="lg" borderWidth="1px">
        <Flex alignItems="center">
            <Heading size="md">{title}</Heading>
            <Spacer />
            <Tag>${price}</Tag>
        </Flex>
    </Box>
}

function Store({items, onItemAdd}) {
    const nameRef = useRef();
    const priceRef = useRef();

    return (
        <Box p={4}>
            <Stack>
                {items.map(item => {
                    return <StoreItem title={item.title} price={item.price} />
                })}
            </Stack>
            <Input ref={nameRef} mt={10} placeholder="Item name"/>
            <Input ref={priceRef} mt={2} placeholder="Price" type="number"/>
            <Button mt={2} onClick={() => {
                onItemAdd({
                    title: nameRef.current.value,
                    price: priceRef.current.value,
                })
            }}>Add Item</Button>
        </Box>
    );
}

export default Store;