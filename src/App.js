import './App.css';
import ComingSoonPage from './Components/ComingSoonPage';
import NavBar from './Components/NavBar';
import { Container, Center, Stack, Box, Text, VStack, Flex, Divider, Show, Hide } from '@chakra-ui/react';
import BoxGridText from './Components/BoxGridText';
import MapAndCounterSection from './Components/MapAndCounterSection';
import Footer from './Components/Footer';
import DisplayContentPC from './Components/DisplayContentPC';
import DisplayContentMobile from './Components/DisplayContentMobile';




function App() {
  return (
    <>
      <Hide below='800px'>
        <DisplayContentPC/>
      </Hide>
      <Show breakpoint='(max-width: 800px)'>
        <DisplayContentMobile/>
      </Show>
    </>

  )
}

export default App;
