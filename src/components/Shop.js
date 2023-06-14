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
import Footer from './Footer';

function Shop() {
   return (
        <Box backgroundColor="primary.100">
            <Header/>
            <Hero/>
            <Products/>
            <Spacer height="250px"/>
            <Footer/>
        </Box>
    );
}

export default Shop;