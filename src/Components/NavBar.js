//IMPORT COMPONENTS GO HERE:
import {Container, Stack, Box, Image,Center, Text, Flex, Button, Divider} from '@chakra-ui/react'
import { FaDiscord } from "react-icons/fa6";
import AINLogo from '../media/images/AIN_Logo_White.png'

//COMPONENT SECTION CODES GO HERE:
function NavBar()
{
    return(
        <Container maxWidth={'90%'} >
            <Stack spacing={0} flexDirection="column" backgroundColor="#eeeeee" boxShadow='2xl'>
                <Box>
                <Stack flexDirection="row" height={'50%'} gap={0}>
                    <Box width="18%" backgroundColor="#299ab6">
                        <Center>
                            <img src={AINLogo} style={{padding: "20px", width: "50%", minWidth:"150px"}}/>
                        </Center>
                    </Box>
                    <Box width="100%" backgroundColor="#eeeeee" overflow={'clip'} >
                        <Center height="100%">
                            <Flex justifyContent="space-between" width={'100%'} p={'10px'}  mr={'20px'}>
                                <Flex >
                                    <Button variant="unstyled" size="lg" m={'20px'} colorScheme='black' onClick={() => {window.open('https://forums.aoinations.com/', '_blank');}}>
                                        <Text as='b' fontSize='2xl'>FORUMS</Text>
                                    </Button>
                                    <Divider borderColor="linkedin.500" orientation="vertical" border="1px"/>
                                    <Button variant="unstyled" size="lg" m={'20px'} colorScheme='black'  onClick={() => {window.open('https://aoin.miraheze.org/wiki/Main_Page', '_blank');}}>
                                        <Text as='b' fontSize='2xl'>WIKI</Text>
                                    </Button>
                                </Flex>
                                <Center>
                                    <Button variant="solid" colorScheme='green' size="md" onClick={() => {window.open('https://www.aoinations.com/forums/viewforum.php?f=14', '_blank');}}>
                                        <Text as='b' fontSize='2xl'>APPLY</Text>
                                    </Button>
                                </Center>
                            </Flex>
                        </Center>
                    </Box>
                </Stack>
                </Box>
                <Box>
                <Stack flexDirection="row" gap={0}>
                    <Box width="18%" backgroundColor="#212121">
                        <Center height={'100%'}>
                                <Text as='b' color={'white'} fontSize='xl' p={'5px'}>QUICK LINKS</Text>
                        </Center>
                    </Box>
                    <Box width="100%" backgroundColor="#d2d2d2" overflow={'clip'} >
                        <Center height="100%">
                            <Flex justifyContent="space-between" width={'100%'} p={'10px'}  mr={'20px'}>
                            <Flex >
                                <Button variant="unstyled" mx={'20px'} colorScheme='black' onClick={() => {window.open('https://www.aoinations.com/forums/viewforum.php?f=36', '_blank');}}>
                                    <Text as='b' fontSize='xl'>HELP DESK</Text>
                                </Button>
                                
                                <Button variant="unstyled"  mx={'20px'} colorScheme='black' onClick={() => {window.open('https://media.tenor.com/LuJgk042yxkAAAAM/cat-watermelon.gif', '_blank');}}>
                                    <Text as='b' fontSize='xl'>RULES</Text>
                                </Button>
                            </Flex>
                                <Center>
                                    <Button variant="unstyled" onClick={() => {window.open('https://discord.gg/byDKHKV6Ng', '_blank');}}>
                                        <FaDiscord size={30}/>
                                    </Button>
                                </Center>
                            </Flex>
                        </Center>
                    </Box>
                </Stack>
                </Box>
            </Stack>
        </Container>
    )
}

export default NavBar;
