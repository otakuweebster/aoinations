//IMPORT COMPONENTS GO HERE:

import { Container, VStack, Text, Stack,  SimpleGrid, Box, HStack, Center, Flex, IconButton, Heading, Button, useDisclosure, Divider,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter } from "@chakra-ui/react";

    import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
        Image
      } from '@chakra-ui/react'

import CountUp, { useCountUp } from 'react-countup';

import { GiHamburgerMenu } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa6";
import AINLogo from '../media/images/AIN_Logo_White.png'
import ainbg from '../media/images/ain_hq_bg_2mob.png'
import { FaRegEdit } from "react-icons/fa";
import { GiConversation } from "react-icons/gi";
import Footer from "./Footer";


//COMPONENT SECTION CODES GO HERE:
function DisplayContentMobile()
{
    const { isOpen, onOpen, onClose } = useDisclosure()

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });

    return (
        <Container maxWidth="calc(100vw)" h='100%' backgroundColor={'#2d2d2d'} bgImage={ainbg} bgRepeat="no-repeat" bgSize="contain">
            <Container maxWidth={'100%'} h={'100%'} pt={'50px'}>
                <VStack maxWidth={'100%'}>

                    {/* FOR MENUBAR */}
                    <HStack width={'100%'} spacing={0} boxShadow={'dark-lg'} backgroundColor="white">
                    <Box width="100%" backgroundColor="#299ab6"  p={'15px'} >
                        <Center>
                            <img src={AINLogo} style={{ width: "30%", minWidth:"100px"}}/> 
                        </Center>          
                    </Box>
                    <Box width="100%" p={'15px'}>
                        <Center>  
                            <IconButton
                                zIndex="10"
                                icon={<GiHamburgerMenu size={50} />}
                                onClick={onOpen} 
                                backgroundColor={'white'}
                            />
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                size='lg'
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerBody>
                                    <VStack mt={'50px'} p='20px'>
                                            <Button variant="unstyled" size="lg" my={'50px'} colorScheme='black' onClick={() => {window.open('https://forums.aoinations.com/', '_blank');}}>
                                                <Text as='b' fontSize='5xl'>FORUMS</Text>
                                            </Button>
                                            <Button variant="unstyled" size="lg" my={'50px'} colorScheme='black'  onClick={() => {window.open('https://aoin.miraheze.org/wiki/Main_Page', '_blank');}}>
                                                <Text as='b' fontSize='5xl'>WIKI</Text>
                                            </Button>

                                            <Button variant="unstyled" my={'50px'} colorScheme='black' onClick={() => {window.open('https://www.aoinations.com/forums/viewforum.php?f=36', '_blank');}}>
                                                <Text as='b' fontSize='5xl'>HELP DESK</Text>
                                            </Button>
                                    
                                            <Button variant="unstyled"  my={'50px'} colorScheme='black' onClick={() => {window.open('https://media.tenor.com/LuJgk042yxkAAAAM/cat-watermelon.gif', '_blank');}}>
                                                <Text as='b' fontSize='5xl'>RULES</Text>
                                            </Button>

                                            <Button p='20px' variant="solid" my={'50px'}backgroundColor={'#299ab6'} color={'white'} size="6xl" onClick={() => {window.open('https://www.aoinations.com/forums/viewforum.php?f=14', '_blank');}}>
                                                <Text as='b' fontSize='5xl'>APPLY</Text>
                                            </Button>
                                    </VStack>
                                </DrawerBody>
                                <DrawerFooter borderTopWidth='3px' color={'black'} p='20px'>
                                    <Center width='100%'>
                                        <Button variant="unstyled" onClick={() => {window.open('https://discord.gg/byDKHKV6Ng', '_blank');}}>
                                            <FaDiscord size={50}/>
                                        </Button>
                                    </Center>
                                </DrawerFooter>

                                </DrawerContent>
                            </Drawer>       
                        </Center>
                    </Box>
                </HStack>
                
                {/* FOR TEXT */}
                <Flex height={'500px'}  mt={'45px'} maxWidth='100%'>
                    <VStack maxWidth='100%' spacing={0}>
                        <Text fontSize='2xl' color='white' as='' m={0} p={0}>
                                    WELCOME TO
                            </Text>
                            <Text fontSize='5xl' color='white' as='b'>
                                    ALLIANCE OF
                            </Text>
                            <Text fontSize='5xl' color='white' as='b'>
                                    INDEPENDENT
                            </Text>
                            <Text fontSize='5xl' color='white' as='b'>
                                
                                    NATIONS
                                
                            </Text>
                            <Divider borderColor="whiteAlpha.500" color='white' orientation="horizontal" border="2px" mt='20px'/>
                            <Text fontSize='lg' color='white' as='' mt='20px' align={'center'}>
                                <Center>
                                    The AIN is an innovative community of people from around the world, all with a common interest: <br/> Creating their own unique countries, using city building simulators.
                                </Center>
                            </Text>

                    </VStack>
                </Flex>

                <VStack maxWidth='100%' spacing={0} boxShadow={'dark-lg'}>
                    <Box backgroundColor="#0e75ba">
                        <Stack spacing={0} p={'60px'}>
                            <FaRegEdit size={60} color='white'/>
                            <Text fontSize='3xl' color='white' as='b'>
                                JOIN
                            </Text>
                            <Text fontSize='xl' color='white'>
                                It's easy to join our union - we're open to all kinds of countries, federations and city states. and a simple application form is all you need to fill out. Then, our members will vote and you could become an member state!
                            </Text>
                        </Stack>
                    </Box>
                    <Box backgroundColor="#276b90">
                        <Stack spacing={0} p={'60px'}>
                            <GiConversation size={60} color='white'/>
                            <Text fontSize='3xl' color='white' as='b'>
                            PARTICIPATE
                            </Text>
                            <Text fontSize='xl' color='white'>
                            Once you've joined, the opportunities and collaborations are limitless in our union. <br/> <br/>

    From the flexibility of your own forums to post about your country and your City Journal, to your own Wiki database and the chance of participating in a variety of sports and events, our union has everything your country could need, and more.
                            </Text>
                        </Stack>
                    </Box>
                </VStack>

                <VStack maxWidth='100%' spacing={0} mt='40px'>

                    <Text fontSize='5xl' color='white' as='b' align='center'>
                        A community for creative like-minded individuals.<br/>
                    </Text>
                    <Text fontSize='2xl' color='white' align='center' mt='30px'>
                        The AIN is a community of members who work closely together to build a union that they want to see – a community, a brotherhood, an Alliance of Independent Nations. <br/><br/>We are a union of people who create fictitious countries and use city builders like SimCity, Simcity 4, and Cities Skylines to share these creations.
                    </Text>
                    <HStack width={'100%'} spacing={0} mt={'3rem'} boxShadow={'dark-lg'}>
                        <Box width="50%" backgroundColor={'white'} p={'25px'}>
                            <Center height='100%'>
                                <VStack>
                                    <Text as='b' fontSize='8xl'>
                                        <CountUp start={0} end={23} enableScrollSpy scrollSpyOnce={true}/>
                                    </Text>
                                    <Flex>
                                        <Text as='b' fontSize='2xl'>
                                            MEMBERS
                                        </Text>
                                    </Flex>
                                </VStack>
                            </Center>
                        </Box>
                        <Box width="50%" backgroundColor={'lightgray'} p={'25px'}>
                            <Center height='100%'>
                                <VStack>
                                    <Text as='b' fontSize='8xl'>
                                        <CountUp start={0} end={34} scrollSpyOnce={true} enableScrollSpy/>
                                    </Text>
                                    <Flex>
                                        <Text as='b' fontSize='2xl'>
                                            NATIONS
                                        </Text>
                                    </Flex>
                                </VStack>
                            </Center>
                        </Box>
                    </HStack>
                    <Box mt={'3rem'}>
                        <Center>
                            <VStack>
                                <Image src='https://www.dropbox.com/s/abnc9jbr35jp261/Alliance%20Map_NG.png?raw=1' boxShadow={'dark-lg'}/>
                            </VStack>
                        </Center>
                    </Box>
                </VStack>

                <Flex maxWidth={'100%'} mt={'50px'} flexDirection={'column'}>
                    <Divider borderColor="whiteAlpha.500" color='white' orientation="horizontal" border="2px"/>
                    <Center p={'20px'}>
                    <Text as={'b'} fontSize='md' color='white' align='center'>
                        Freedom • Independence • Peace • Justice • Equality
                    </Text>
                    </Center>
                </Flex>
        
            
                <Text as='b' color='white' align='center' my='40px'>
                    © 2024 Alliance of Independent Nations. All rights reserved.
                </Text>
                </VStack>
            </Container>
        </Container>
        
    )
}

export default DisplayContentMobile;