import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { http } from 'wagmi';
const projectId = '953b8aabd42f299570ac0cb2509db530'

import type { Chain } from 'viem'

const fhenix = {
  id: 8008135,
  name: 'Fhenix',
  nativeCurrency: { name: 'tFHE', symbol: 'FHE', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.helium.fhenix.zone'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.helium.fhenix.zone' },
  },
} as const satisfies Chain

export const wagmiConfig = getDefaultConfig({
  transports: {
    [fhenix.id]: http(),
  },
    appName: 'My-first-dapp',
    projectId: projectId,
    chains: [fhenix],
    ssr: true,
  });

// testnet
export const votingAddress = '0xd67b7Ca1165D77a6b767693C60dd432657352011'

// localhost
// export const votingAddress = "0xbeb4eF1fcEa618C6ca38e3828B00f8D481EC2CC2"
