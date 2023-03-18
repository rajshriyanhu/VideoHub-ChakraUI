import React from 'react'
import {Box,Heading,Stack,Text,VStack,HStack,Button, Input} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>Subscribe to newsletter</Heading>
                <HStack borderBottom={'1px solid purple'} py={'2'}>
                <Input placeholder='Enter Email' border={'none'} borderRadius={'none'} />
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}><AiOutlineSend size={'20'}/></Button>
                </HStack>
            </VStack>

            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
                <Text colorScheme='purple'>All right reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={'link'} colorScheme='purple'><a href="https://www.youtube.com/" target='blank'>Youtube</a></Button>
                <Button variant={'link'} colorScheme='purple'><a href="https://www.youtube.com/" target='blank'>Instagram</a></Button>
                <Button variant={'link'} colorScheme='purple'><a href="https://github.com/" target='blank'>Github</a></Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer