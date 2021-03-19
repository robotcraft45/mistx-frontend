import { ethers } from 'ethers';
import { Network } from '../types';
import { Wallet } from 'bnc-onboard/dist/src/interfaces';
import { initNotify, initOnboard } from '../services/wallet';
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';

type WalletProviderContext = {
  provider?: ethers.providers.Web3Provider;
  address?: string;
  network?: Network;
  balance?: string;
  wallet?: Wallet;
  loading?: boolean;
  onboard?: ReturnType<typeof initOnboard>;
  notify?: ReturnType<typeof initNotify>;
};

type WalletProviderProps = { children: ReactElement };

const WalletStateContext = createContext<WalletProviderContext | undefined>(
  undefined
);

function WalletProvider({ children }: WalletProviderProps): ReactElement {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [address, setAddress] = useState<string>();
  const [network, setNetwork] = useState<Network>();
  const [balance, setBalance] = useState<string>();
  const [wallet, setWallet] = useState<Wallet>();
  const [loading, setLoading] = useState<boolean>(true);
  const [onboard, setOnboard] = useState<ReturnType<typeof initOnboard>>();
  const [notify, setNotify] = useState<ReturnType<typeof initNotify>>();

  useEffect(() => {
    const onboard = initOnboard({
      address: setAddress,
      network: setNetwork,
      balance: (balance) => {
        if (balance) {
          setBalance(ethers.utils.formatEther(balance));
        }
      },
      wallet: (wallet: Wallet) => {
        if (wallet?.provider) {
          setWallet(wallet);
          handleSetProvider(wallet);
          setLoading(false);
        } else {
          setProvider(undefined);
          setWallet(undefined);
          setBalance(undefined);
          setLoading(false);
        }
      },
    });

    setOnboard(onboard);
    setNotify(initNotify());
  }, []);

  useEffect(() => {
    const previouslySelectedWallet = window.localStorage.getItem(
      'selectedWallet'
    );

    if (!previouslySelectedWallet) {
      setLoading(false);
    }

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet);
    }
  }, [onboard]);

  const handleSetProvider = (wallet: Wallet) => {
    const ethersProvider = new ethers.providers.Web3Provider(wallet.provider);
    setProvider(ethersProvider);
    window.localStorage.setItem('selectedWallet', wallet.name || '');
  };

  return (
    <WalletStateContext.Provider
      value={{
        provider,
        address,
        network,
        balance,
        wallet,
        loading,
        onboard,
        notify,
      }}
    >
      {children}
    </WalletStateContext.Provider>
  );
}

function useWallet(): WalletProviderContext {
  const context = useContext(WalletStateContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

export { WalletProvider, useWallet };
