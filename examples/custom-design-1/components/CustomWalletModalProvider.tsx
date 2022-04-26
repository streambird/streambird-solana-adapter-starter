import React, { FC, ReactNode, useState } from 'react';
import { WalletModalContext } from '@solana/wallet-adapter-react-ui';
import { CustomWalletModal, CustomWalletModalProps } from './CustomWalletModal';

export interface CustomWalletModalProviderProps extends CustomWalletModalProps {
  children: ReactNode;
}

export const CustomWalletModalProvider: FC<CustomWalletModalProviderProps> = ({ children, ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <WalletModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
      {visible && <CustomWalletModal {...props} />}
    </WalletModalContext.Provider>
  );
};
