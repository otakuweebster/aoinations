import { Center, Container, VStack, Image, Text, Box } from '@chakra-ui/react'
import construction from '../media/images/Coming Soon/AIN_Construction.png'
import ainlogo from '../media/images/AIN_Logo.png'
import bg from '../media/images/Coming Soon/bg.png'

function ComingSoonPage() {
    return (
      <Container id='MAIN SCREEN' h='calc(100vh)' maxW='calc(100vw)' backgroundImage={bg} backgroundPosition="center" backgroundSize='cover'>
          <Center h='calc(100vh)'>
            <Box backgroundColor='white' maxW='40%' maxH="90%" borderRadius='50px' p='75px'  boxShadow='dark-lg'>
            <VStack>
                  <Image src={construction}></Image>
                  <Text as='b' fontSize='5xl' textAlign='center'>A fresh new look, coming soon.</Text>
                  <Image src={ainlogo} maxW='10%'></Image>
            </VStack>
            </Box>
          </Center>
      </Container>
    )
}
  
  
  export default ComingSoonPage;