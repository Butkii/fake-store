import { 
    Box, 
    Grid,
    GridItem,
    InputGroup,
    InputRightElement,
    Input,
    Button,
    Heading,
    Flex,
    SimpleGrid,
    Spacer,
    Text,
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from 'react';
import axios from 'axios';
import StoreItem from './StoreItem';

function Products() {
    const [sort, setSort] = useState("desc");
    const [filter, setFilter] = useState("All");

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState(
        ['All']
    );

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=6").then(({data}) => {
            setProducts(data);
        })
    }, []);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then(({data}) => {
        setCategories([...categories, ...data]);
        })
    }, []);
   
    function filterSortProducts() {
        if (sort == "desc") {
            if (filter === 'All') {
                axios.get("https://fakestoreapi.com/products?limit=6&sort=desc").then(({data}) => {
                    setProducts(data);
                })
            } else {
                axios.get("https://fakestoreapi.com/products/category/" + filter + "?limit=6&sort=desc").then(({data}) => {
                    setProducts(data);
                })
            }
        } else if (sort == "asc") {
            if (filter === 'All') {
                axios.get("https://fakestoreapi.com/products?limit=6").then(({data}) => {
                    setProducts(data);
                })
            } else {
                axios.get("https://fakestoreapi.com/products/category/" + filter + "?limit=6").then(({data}) => {
                    setProducts(data);
                })
            }
        }
        
    }

    function sortProducts(products, item) {

    }

    return <Box paddingX={20} paddingY={6}>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}> 
            <GridItem colSpan={1}>
                <InputGroup>
                    <Input 
                        padding={4} 
                        size="sm"
                        placeholder="Search"
                        focusBorderColor="base.black"
                        borderColor="text.title"
                        onChange={e => {
                            let f = products.filter(item => item.title.toLowerCase().includes(e.target.value));
                            setProducts(f);
                        }}
                    />
                    <InputRightElement pointerEvents='none'>
                        <Icon mx={2} mb={2} color="text.body2" as={ BsSearch }/>
                    </InputRightElement>
                </InputGroup>
                <Spacer height={8} />
                <Heading size={16} pb={4}>
                    Product Categories
                </Heading>
                <Flex direction="column">
                    {categories.map(item => {
                        return <Heading alignSelf="start" backgroundColor="transparent" fontSize="16px" fontWeight="700" color="text.body2" as={Button} onClick={() => {
                            setFilter(item);
                            filterSortProducts();
                        }}>
                        {item}
                        </Heading>
                    })}
                </Flex>
                <Heading size={16} pb={4}>
                    Sort
                </Heading>
                <Flex direction="column">
                    <Heading alignSelf="start" backgroundColor="transparent" fontSize="16px" fontWeight="700" color="text.body2" as={Button} onClick={() => {
                            setSort("asc");
                            filterSortProducts();
                        }}>
                        Price: Low to High
                    </Heading>
                    <Heading alignSelf="start" backgroundColor="transparent" fontSize="16px" fontWeight="700" color="text.body2" as={Button} onClick={() => {
                            setSort("desc");
                            filterSortProducts();
                        }}>
                        Price: High to Low
                    </Heading>
                </Flex>
            </GridItem>
            <GridItem colSpan={2}>
                <SimpleGrid columns={2} spacing="10px" minWidth="100px">
                    {products.map(item => {
                        return <StoreItem title={item.title} category={item.category} image={item.image} />
                    })}
                </SimpleGrid>
            </GridItem>
        </Grid>
    </Box>
}

export default Products;