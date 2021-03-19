import { Box, Stat, StatLabel, StatNumber, StatGroup } from '@chakra-ui/react';
import { useWallet } from '../context/wallet';

function Balance() {
  const { balance } = useWallet();

  return (
    <Box mt={8}>
      <StatGroup width='sm'>
        <Stat flex='initial'>
          <StatLabel>Eth</StatLabel>
          <StatNumber>{balance}</StatNumber>
        </Stat>
      </StatGroup>
    </Box>
  );
}

export default Balance;
