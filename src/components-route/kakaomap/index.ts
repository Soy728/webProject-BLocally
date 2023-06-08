export { default as KaKaoMap } from './index.svelte';
import type { SellerInfo } from '@src/components-route/seller-item';

export interface Location {
	address: string;
	title: string;
	enableDlvr: boolean;
	sellerInfo?: SellerInfo;
}
