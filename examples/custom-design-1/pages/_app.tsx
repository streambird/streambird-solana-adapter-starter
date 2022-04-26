import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { StreambirdWalletAdapter } from '@streambird/solana-wallet-adapter'
import { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { CustomWalletModalProvider } from '../components/CustomWalletModalProvider';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

function MyApp({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new StreambirdWalletAdapter(),
      new PhantomWalletAdapter(),
      new TorusWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network })
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
          <CustomWalletModalProvider>
            <Component {...pageProps} />
          </CustomWalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default MyApp
