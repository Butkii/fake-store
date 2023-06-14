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
import axios from 'axios';
import { useState, useEffect } from 'react';

function Store() {
   return (
        <Box backgroundColor="primary.100">
            <Header/>
            <Hero/>
            <Categories/>
        </Box>
    );
}

/*
const [storeItem, setStoreItem] = useState([]);
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(({data}) => {
        setStoreItem(data);
        })
    }, []);

*/

export default Store;