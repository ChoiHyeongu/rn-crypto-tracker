import { Platform } from 'react-native';

export const API_VERSION = 'v1';
export const API_KEY = process.env.REACT_APP_API_KEY;
export const BASE_URL = `https://pro-api.coinmarketcap.com/${API_VERSION}/`;

export const isDev = __DEV__;
export const isiOS = Platform.OS === 'ios';

export const CRYPTOCURRENCY = 'cryptocurrency';
export const EXCHANGE = 'exchange';
export const GLOBAL_METRICS = 'global-metrics';
export const TOOLS = 'tools';
export const BLOCKCHAIN = 'blockchain';
export const FIAT = 'fiat';
export const PARTENRS = 'partners';
export const KEY = 'key';
