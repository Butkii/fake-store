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
import Products from './Products';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Shop() {
   return (
        <Box backgroundColor="primary.100">
            <Header/>
            <Hero/>
            <Products/>
        </Box>
    );
}

/*
const [ShopItem, setShopItem] = useState([]);
    
    useEffect(() => {
        axios.get("https://fakeShopapi.com/products").then(({data}) => {
        setShopItem(data);
        })
    }, []);

*/

export default Shop;