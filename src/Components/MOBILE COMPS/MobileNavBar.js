//IMPORT COMPONENTS GO HERE:
import {Container, Stack, Box, Image,Center, Text, Flex, SimpleGrid, Button, Divider, HStack} from '@chakra-ui/react'
import AINLogo from '../../media/images/AIN_Logo_White.png'

//COMPONENT SECTION CODES GO HERE:
function MobileNavBar()
{
    <Container maxWidth={'90%'}>
        <SimpleGrid columns={2} spacingX={0} spacingY={0} borderRadius={'20px'} boxShadow={'dark-lg'}>
                <Box width="20%" backgroundColor="#299ab6" p={'25px'} >
                    <Center>
                        <img src={AINLogo} style={{ width: "30%", minWidth:"50px"}}/> 
                    </Center>          
                </Box>
                <Box width="80%" p={'25px'}>
                    <Flex direction={'row-reverse'}>
                        <Text as='b' fontSize='xl'>© 2024 Alliance of Independent Nations. All rights reserved. </Text>
                    </Flex>          
                </Box>
            </SimpleGrid>
    </Container>
}

export default MobileNavBar;