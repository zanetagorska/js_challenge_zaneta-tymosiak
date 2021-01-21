import { camelCase } from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Obj = Record<string, any>

const camelizeKeys = (obj: Obj): Obj => {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v));
  }
  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

export default camelizeKeys;