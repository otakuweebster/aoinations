//IMPORT COMPONENTS GO HERE:
import {Container, Stack, Box, Image,Center, Text, SimpleGrid} from '@chakra-ui/react'
import { FaRegEdit } from "react-icons/fa";
import { GiConversation } from "react-icons/gi";

//COMPONENT SECTION CODES GO HERE:
function BoxGridText()
{
    return (
        <Container maxWidth={'90%'} mt={'3rem'}>
            <SimpleGrid columns={2} spacingX={0} spacingY={0} borderRadius={'20px'} boxShadow={'dark-lg'}>
                <Box backgroundColor="#0e75ba">
                    <Stack spacing={0} p={'60px'}>
                        <FaRegEdit size={100} color='white'/>
                        <Text fontSize='8xl' color='white' as='b'>
                            JOIN
                        </Text>
                        <Text fontSize='2xl' color='white'>
                            <br/><br/>
                            It's easy to join our union - we're open to all kinds of countries, federations and city states. and a simple application form is all you need to fill out. Then, our members will vote and you could become an member state!
                        </Text>
                    </Stack>
                </Box>
                <Box backgroundColor="#276b90">
                    <Stack spacing={0} p={'60px'}>
                        <GiConversation size={100} color='white'/>
                        <Text fontSize='8xl' color='white' as='b'>
                            PARTICIPATE
                        </Text>
                        <Text fontSize='2xl' color='white'>
                        Once you've joined, the opportunities and collaborations are limitless in our union. <br/> <br/>

From the flexibility of your own forums to post about your country and your City Journal, to your own Wiki database and the chance of participating in a variety of sports and events, our union has everything your country could need, and more.
                        </Text>
                    </Stack>
                </Box>
            </SimpleGrid>
        </Container>
    )
}

export default BoxGridText;