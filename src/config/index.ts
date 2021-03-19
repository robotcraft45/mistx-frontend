import { Network } from '../types';

type Config = {
  networkId: Network;
  rpcUrl: string;
  dappId: string;
  appName: string;
};

export const config: Config = {
  networkId: Network.MAINNET,
  rpcUrl: 'https://mainnet.infura.io/v3/5505e75053fb4b1ea7ee11fa60f42529',
  dappId: '6bc363be-f6c0-4593-8edd-761472d54dfe',
  appName: 'mistX',
};
