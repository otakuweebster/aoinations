//IMPORT COMPONENTS GO HERE:
import NavBar from './NavBar';
import { Container, Center, Stack, Box, Text, VStack, Flex, Divider, Show, Hide } from '@chakra-ui/react';
import BoxGridText from './BoxGridText';
import MapAndCounterSection from './MapAndCounterSection';
import Footer from './Footer';
import ainbg from '../media/images/ain_hq_bg.png'


//COMPONENT SECTION CODES GO HERE:
function DisplayContentPC()
{
    return (
      <Container maxWidth="calc(100vw)" h='100%' backgroundColor={'#2d2d2d'} bgImage={ainbg} bgRepeat="no-repeat" bgSize="contain">
        <Container maxWidth={'100%'} h={'100%'} pt={'50px'}>
          <Stack>
            <NavBar/>

            <Flex maxWidth={'100%'} height={'500px'}  mx="160PX" my={'50px'} >
              <Center height="100%" maxWidth={'100%'}>
                <Stack direction={'column'} spacing={0}>
                    <Text fontSize='3xl' color='white' as='' m={0} p={0}>
                        WELCOME TO
                      </Text>
                      <Text fontSize='8xl' color='white' as='b'>
                        ALLIANCE OF 
                      </Text>
                      <Text fontSize='8xl' color='white' as='b'>
                        INDEPENDENT NATIONS
                    </Text>
                    <Divider borderColor="whiteAlpha.500" color='white' orientation="horizontal" border="2px"/>
                    <Text fontSize='lg' color='white' as='' mt='20px'>
                      The AIN is an innovative community of people from around the world, all with a common interest: <br/> Creating their own unique countries, using city building simulators.
                    </Text>
                  </Stack>
              </Center>
            </Flex>

            <BoxGridText/>
            <MapAndCounterSection/>
              <Flex maxWidth={'100%'}  mx="300PX" mt={'50px'} flexDirection={'column'}>
                <Divider borderColor="whiteAlpha.500" color='white' orientation="horizontal" border="2px"/>
                <Center p={'20px'}>
                  <Text as={'b'} fontSize='4xl' color='white'>
                    Freedom • Independence • Peace • Justice • Equality
                  </Text>
                </Center>

              </Flex>
              <Footer/>
          </Stack>

        </Container>
      </Container>
        
    )
}

export default DisplayContentPC