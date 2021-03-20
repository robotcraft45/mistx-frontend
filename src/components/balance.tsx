import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Collapse,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useWallet } from '../context/wallet';

function Balance() {
  const [show, setShow] = useState(false);
  const { ethBalance, mistBalance } = useWallet();

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Collapse startingHeight={0} in={show}>
      <Box mt={8}>
        <StatGroup width='sm'>
          <Stat flex='initial'>
            <StatLabel>ETH</StatLabel>
            <StatNumber>{ethBalance}</StatNumber>
          </Stat>
          <Stat flex='initial'>
            <StatLabel>MIST</StatLabel>
            <StatNumber>{mistBalance}</StatNumber>
          </Stat>
        </StatGroup>
      </Box>
    </Collapse>
  );
}

export default Balance;
