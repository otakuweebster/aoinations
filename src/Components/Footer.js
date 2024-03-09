//IMPORT COMPONENTS GO HERE:
import {Container, Stack, Box, Image,Center, Text, Flex, Button, Divider, HStack} from '@chakra-ui/react'
import AINLogo from '../media/images/AIN_Logo_White.png'

function Footer()
{
    return (
        <Container maxWidth={'90%'} >
            <HStack maxWidth={'100%'} spacing={0} my={'3rem'} boxShadow={'dark-lg'} backgroundColor={'white'}>
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
            </HStack>
        </Container>
    )
}

export default Footer;