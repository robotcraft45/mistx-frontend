import { useWallet } from './context/wallet';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import WalletButton from './components/wallet-button';
import Balance from './components/balance';

function App() {
  const { provider, wallet, ethBalance } = useWallet();

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
        mistX
      </Heading>
      <Text color='gray.400' fontSize='2xl'>
        Gasless DEX
      </Text>
      <WalletButton connected={!!wallet && !!provider} />
      {ethBalance && <Balance />}
    </Flex>
  );
}

export default App;
