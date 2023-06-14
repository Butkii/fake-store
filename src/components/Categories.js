import {
    Box,
    Heading,
    Flex,
    Grid,
    SimpleGrid,
    Button,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import StoreItem from './StoreItem';

function Categories({categories}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=6").then(({data}) => {
            setProducts(data);
        })
      }, []);

    function filterProducts(item) {
        if (item === 'All') {
            axios.get("https://fakestoreapi.com/products?limit=6").then(({data}) => {
                setProducts(data);
            })
        } else {
            axios.get("https://fakestoreapi.com/products/category/" + item + "?limit=6").then(({data}) => {
                setProducts(data);
            })
        }
    }

    return <Box paddingX={20} paddingTop={20}>
        <Heading fontWeight={700} size="lg" color="text.title" textAlign="center">
            Our Premium Collection
        </Heading>
        <Flex  paddingY={6} justifyContent="center">
            {categories.map(item => {
                return <Heading backgroundColor="transparent" mx={4} fontSize="16px" fontWeight="700" color="text.body2" as={Button} onClick={() => {
                    filterProducts(item);
                }}>
                {item}
                </Heading>
            })}
        </Flex>
        <SimpleGrid columns={3} spacing="10px" minWidth="100px">
            {products.map(item => {
                return <StoreItem title={item.title} category={item.category} image={item.image} />
            })}
        </SimpleGrid>
    </Box>
}

/*
*/
export default Categories;