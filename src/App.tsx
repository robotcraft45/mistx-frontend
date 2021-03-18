import { Flex, Heading, Text } from '@chakra-ui/layout';

function App() {
  return (
    <Flex
      minH='100vh'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      <Heading
        fontSize={['6xl', '6xl', '8xl']}
        bgGradient='linear(to-r, #FF0080, #7928CA)'
        bgClip='text'
      >
        MistX
      </Heading>
      <Text color='gray.400' fontSize='2xl'>
        Gasless DEX
      </Text>
    </Flex>
  );
}

export default App;
