/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import { Popover } from '@headlessui/react'
import { WalletModalButton } from '../components/WalletModalButton'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui'

const Home = () => {
  const { 
    publicKey,
    connected
  } = useWallet()

  return (
    <div className="bg-white z-0">
      <header>
        <Popover className="relative bg-white">
          <div className="flex justify-between items-center w-full mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10 items-center">
              {
                connected ? <WalletDisconnectButton>
                  Disconnect
                </WalletDisconnectButton> : 
                <WalletModalButton>
                  Connect wallet
                </WalletModalButton>
              }
            </Popover.Group>
          </div>
        </Popover>
      </header>
      <main>
        {
          connected ? <div className="w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Public Address</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{publicKey ? publicKey.toBase58() : ''}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div> :
          <>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
              <div className="w-full mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1621761225597-32b61662062f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                      alt="People working on laptops"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Bird Finance</span>
                      <span className="block text-green-200">cryptocurrencies + NFTs</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                      Buy and sell cryptocurrencies from hundreds of exchanges at great rates.<br/>Buy, sell and mint NFTs with zero fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </main>
      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
          <p className="mt-8 text-center text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 Bird Finance, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home
