import React from 'react'
import {Avatar,Heading,Container,Text,VStack,Button, Input} from '@chakra-ui/react'
import {Link} from 'react-router-dom'


const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'5'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'6'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading>VIDEO HUB</Heading>
                <Avatar alignSelf='center' boxSize={'32'} />
                <Input placeholder='Name' type='name' required focusBorderColor='purple.500' />
                <Input placeholder='Email' type='email' required focusBorderColor='purple.500' />
                <Input placeholder='Create Password' type='password' required focusBorderColor='purple.500' />

                <Button colorScheme='purple' type='submit'>SignUp</Button>
                <Text textAlign={'right'}>Already Signed Up ? {'  '}
                <Button variant={'link'} colorScheme='purple'>
                    <Link to={'/login'}>Login</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Signup