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
Joining our union is a straightforward process - we welcome countries, federations, and city-states of all kinds. Simply complete a basic application form, and after our members vote, you could potentially become a member state!
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
                        Once you've become a member, the possibilities for opportunities and collaborations within our union are boundless.<br/> <br/>

                        From the freedom to create your own forums to showcase your country and maintain your City Journal, to access to our comprehensive Wiki database and the opportunity to participate in diverse sports and events, our union offers everything your country could desire, and beyond.
                        </Text>
                    </Stack>
                </Box>
            </SimpleGrid>
        </Container>
    )
}

export default BoxGridText;