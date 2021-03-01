import { CRYPTOCURRENCY } from 'config/constant';
import { get } from 'config/network';

export const coinMarketCapIDMap = () => {
  return get(`${CRYPTOCURRENCY}/map`);
};

export default {
  coinMarketCapIDMap,
};
