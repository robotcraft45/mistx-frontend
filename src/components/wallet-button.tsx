import { Button } from '@chakra-ui/button';
import { useWallet } from '../context/wallet';
import { truncate } from '../utils';

type Props = {
  connected: boolean;
};

function WalletButton({ connected }: Props) {
  const { onboard, loading, address } = useWallet();

  const handleClick = () => onboard?.walletSelect()

  return (
    <Button
      mt={4}
      size='lg'
      colorScheme='brand'
      onClick={handleClick}
      isLoading={loading}
    >
      {connected ?  truncate(address) : 'Connect'}
    </Button>
  );
}

export default WalletButton;
