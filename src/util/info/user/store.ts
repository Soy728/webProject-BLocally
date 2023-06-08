import { WritableStorage } from '@src/lib/writable-storage';

export const userInfo = WritableStorage.persisted<number>('user', -1);
