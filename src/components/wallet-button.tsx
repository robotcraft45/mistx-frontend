import { Button } from '@chakra-ui/button';
import { useWallet } from '../context/wallet';

type Props = {
  connected: boolean;
};

function WalletButton({ connected }: Props) {
  const { onboard, loading } = useWallet();

  const handleClick = () =>
    connected ? onboard?.walletReset() : onboard?.walletSelect();

  return (
    <Button
      mt={4}
      size='lg'
      colorScheme='brand'
      onClick={handleClick}
      isLoading={loading}
    >
      {connected ? 'Disconnect' : 'Connect'}
    </Button>
  );
}

export default WalletButton;
