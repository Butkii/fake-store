import {
    Box,
    Heading,
    Flex,
    Text,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Categories() {
    const [categories, setCategories] = useState(
        ["All"]
    );

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then(({data}) => {
        setCategories(data);
        })
    }, []);

    return <Box paddingX={12} paddingTop={20} paddingBottom={6}>
        <Heading fontWeight={700} size="lg" color="text.title" textAlign="center">
            Our Premium Collection
        </Heading>
        <Flex>
            {categories.map(item => {
                return <Text my={2} fontSize="md" fontWeight="bold">
                    {item}
                </Text>
            })}
        </Flex>
    </Box>
}

export default Categories;