//IMPORT COMPONENTS GO HERE:
import {Container, Stack, Box, Image,Center, Text, SimpleGrid, HStack, VStack, Flex} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import CountUp, { useCountUp } from 'react-countup';
import { FaPerson } from "react-icons/fa6";
import { useDisclosure } from '@chakra-ui/react';



//COMPONENT SECTION CODES GO HERE:
function MapAndCounterSection()
{
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });

      const { isOpen, onOpen, onClose } = useDisclosure();
    

    return (
                <Container maxWidth={'90%'} mt={'5rem'} p={'20px'} >
            <Modal isOpen={isOpen} onClose={onClose} size='max'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Center>
                            <Text as='b' fontSize='2xl' >
                            Alliance of Independent Nations Map
                            </Text>
                        </Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src='https://www.dropbox.com/s/abnc9jbr35jp261/Alliance%20Map_NG.png?raw=1' />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <SimpleGrid columns={2} spacingX={120}>
                <Stack spacing={2}>
                    <Text fontSize='6xl' color='white' as='b'>
                        A community for creative like-minded individuals.
                    </Text>
                    <Text fontSize='2xl' color='white'>
                        The AIN embodies a community of members collaborating closely to construct a union aligned with their vision - a community, a fraternity, an Alliance of Independent Nations. <br/><br/>We are a union of individuals who craft imaginary nations and utilize city-building platforms such as SimCity 4 and Cities Skylines to showcase these creations and share them with others.
                    </Text>
                    <HStack maxWidth={'100%'} spacing={0} mt={'3rem'} boxShadow={'dark-lg'}>
                        <Box width="50%" backgroundColor={'white'} p={'25px'}>
                            <Center height='100%'>
                                <VStack>
                                    <Text as='b' fontSize='9xl'>
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
                                    <Text as='b' fontSize='9xl'>
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
                </Stack>
                <Box>
                    <Center>
                        <VStack>
                            <Image src='https://www.dropbox.com/s/abnc9jbr35jp261/Alliance%20Map_NG.png?raw=1' boxShadow={'dark-lg'} onClick={onOpen}/>
                            <Text as='b' fontSize='2xl' color={'white'}>
                                <i>Press map to enlarge</i>
                            </Text>
                        </VStack>
                    </Center>
                </Box>
            </SimpleGrid>
        </Container>
    )
}

export default MapAndCounterSection;