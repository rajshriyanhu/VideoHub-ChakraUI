import React from 'react'
import {Box,Heading,Image,Container,Stack,Text} from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"
const headingOptions = {
    pos:"absolute",
    left:'50%',
    top:'10%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p:'4',
    size:'3xl',
}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p='16'>
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>Services</Heading>
            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
                <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}></Image>
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</Text>
            </Stack>
        </Container>
    </Box>
  )

  
  }
  const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} h='full' w='full' objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} h='full' w='full' objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Future is Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} h='full' w='full' objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming on Console</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} h='full' w='full' objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Night Life is Cool</Heading>
        </Box>
    </Carousel>
  )

export default Home