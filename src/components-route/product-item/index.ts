export { default as ProductItem } from './index.svelte';
export interface ItemInfo {
	id: number;
	username: string;
	category: number;
	img: string;
	price: number;
	name: string;
	soldCnt: number;
	reviewCnt: number;
	score: number;
	rcmdCnt: number;
	dlvrPossible: number;
	endDate: number;
	newReview?: string;
}
